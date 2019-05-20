import React from 'react'

import styles from './TextButton.css'

const TextButton = props => {
  const { content, backgroundColor, textColor, border, width, height } = props
  return (
    <>
      <style>{styles.toString()}</style>
      <div
        className="text-button"
        style={{
          backgroundColor,
          color: textColor,
          border,
          width,
          height
        }}
      >
        <span className="text-button__content">{content}</span>
      </div>
    </>
  )
}

export default TextButton
