import { createSignal } from 'solid-js'

const Button = ({ text }) => {
  const [buttonText, setButtonText] = createSignal(text || 'Click me!')

  return (
    <button class="button" onClick={() => setButtonText(buttonText() + '🔥')}>
      {buttonText()}
    </button>
  )
}

export default Button
