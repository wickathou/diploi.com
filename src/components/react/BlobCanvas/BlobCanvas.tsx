import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import styles from './BlobCanvas.module.scss';
import { animateBlobs, INITIAL_LEFT_BLOB_DEFAULT, INITIAL_RIGHT_BLOB_DEFAULT } from './lib';

const BlobCanvasComponent = ({ width, height, leftOnly = false }: { width: number; height: number; leftOnly: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const baseRadius = width < 500 ? 100 : 200;

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    animateBlobs({
      ctx,
      leftOnly,
      initialLeftBlob: { ...INITIAL_LEFT_BLOB_DEFAULT, baseRadius },
      initialRightBlob: { ...INITIAL_RIGHT_BLOB_DEFAULT, baseRadius },
    });
  }, [canvasRef, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: 'absolute',
        left: 0,
      }}
    >
      You need a browser that supports HTML5!
    </canvas>
  );
};

type BlobCanvasProps = {
  top?: number;
  leftOnly?: boolean;
};

export const BlobCanvas = ({ leftOnly = false }: BlobCanvasProps) => {
  const [containerRef, bounds] = useMeasure();

  return (
    <div ref={containerRef} className={styles.blobCanvas}>
      {bounds.width && bounds.height && <BlobCanvasComponent width={bounds.width} height={bounds.height} leftOnly={leftOnly} />}
    </div>
  );
};
