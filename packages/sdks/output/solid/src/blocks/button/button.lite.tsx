import { Show } from "solid-js";

function Button(props) {
  return (
    <>
      <Show when={props.link}>
        <a
          {...props.attributes}
          role="button"
          href={props.link}
          target={props.openLinkInNewTab ? "_blank" : undefined}
        >
          {props.text}
        </a>
      </Show>
    </>
  );
}

export default Button;
