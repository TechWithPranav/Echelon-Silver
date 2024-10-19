"use client";
import { useEffect, useRef, useState } from 'react';

const HandwritingToText = () => {
    const canvasRef = useRef(null);
    const [recognizedText, setRecognizedText] = useState("");
    const [isDrawing, setIsDrawing] = useState(false);
    let timeout = null;
    const drawings = [];

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set initial canvas background
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const handleMouseDown = (event) => {
            setIsDrawing(true);
            drawings.push({ x: event.clientX, y: event.clientY });
            updateCanvas();
        };

        const handleMouseMove = (event) => {
            if (!isDrawing) return;
            drawings.push({ x: event.clientX, y: event.clientY });
            updateCanvas();
        };

        const handleMouseUp = () => {
            setIsDrawing(false);
            timeout = setTimeout(captureAndProcessImage, 2000);
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (drawings.length === 0) return;

        const ctx = canvasRef.current.getContext('2d');
        for (const drawing of drawings) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';
            ctx.lineTo(drawing.x, drawing.y);
            ctx.stroke();
        }
    }, [drawings]);

    const captureAndProcessImage = async () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append('image', blob, 'handwritten.png');

            try {
                const response = await fetch('https://25a9-34-139-85-54.ngrok-free.app/ocr', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                if (result.text && result.text.trim() !== "") {
                    setRecognizedText(result.text);
                } else {
                    setRecognizedText("No text recognized.");
                }

            } catch (error) {
                console.error("Error during OCR processing:", error);
                setRecognizedText("Failed to recognize text.");
            }
        }, 'image/png');
    };

    const clearCanvas = () => {
        drawings.length = 0;
        const ctx = canvasRef.current.getContext('2d');
        for (const drawing of drawings) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';
            ctx.lineTo(drawing.x, drawing.y);
            ctx.stroke();
        }
    };

    const updateCanvas = () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current.getContext('2d');
        canvas.clearRect(0, 0, canvas.width, canvas.height);

        for (const drawing of drawings) {
            canvas.beginPath();
            canvas.lineWidth = 2;
            canvas.lineCap = 'round';
            canvas.strokeStyle = '#000';
            canvas.lineTo(drawing.x, drawing.y);
            canvas.stroke();
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Stylus</h1>
            <canvas ref={canvasRef} width={800} height={500} style={styles.canvas}></canvas>
            <button onClick={clearCanvas}>Clear</button>
            {recognizedText && (
                <div style={{ fontSize: 18, marginBottom: 16 }}>
                    Recognized text: {recognizedText}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 800,
        margin: '40px auto',
        padding: 20,
        border: '1px solid #ddd',
        borderRadius: 10,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    canvas: {
        border: '1px solid #ccc',
    },
};

export default HandwritingToText;