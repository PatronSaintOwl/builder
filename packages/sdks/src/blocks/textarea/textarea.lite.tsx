import { componentInfo } from './component-info.js';
import { useMetadata } from '@builder.io/mitosis';

export interface TextareaProps {
  attributes?: any;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
}

export default function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props.attributes}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      defaultValue={props.defaultValue}
    />
  );
}
