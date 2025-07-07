import { CSSProperties } from 'react';

type Props = {
    text: string;
    style?:  CSSProperties | undefined;
    classNames?: string;
}

const ErrorText = ({ text, style, classNames }: Props) => {
  return (
    <p className={classNames ? classNames : 'text-red-500 font-semibold text-wrap py-auto'} style={style}>
        {text}
    </p>
  );
}

export default ErrorText;
