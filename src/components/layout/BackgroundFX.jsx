export default function BackgroundFX({ cursor, reducedMotion }) {
  const style = reducedMotion
    ? {}
    : { "--cx": `${cursor.x}px`, "--cy": `${cursor.y}px` };

  return <div className="bgFx" style={style} aria-hidden />;
}
