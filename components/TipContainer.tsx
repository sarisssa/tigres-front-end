interface ITipContainerProps {
  tip: string;
}

export function TipContainer({ tip }: ITipContainerProps) {
  return (
    <p className="font-normal text-button dark:text-dark-button-active bg-tip-background dark:bg-dark-tip-background rounded-xl p-4">
      <strong>Tip: </strong>
      {tip}
    </p>
  );
}
