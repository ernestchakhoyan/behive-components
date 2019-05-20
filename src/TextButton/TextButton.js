import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextButton.css'

const TextButton = props => {
  const { content, backgroundColor, textColor, border, width, height } = props
  return (
    <>
      <style>{styles.toString()}</style>
      <div
        className="text-button"
        style={{
          height,
          width,
          backgroundColor,
          color: textColor,
          border
        }}
      >
        {content}
      </div>
    </>
  )
}

TextButton.propTypes = {
  content: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

TextButton.defaultProps = {
  content: 'Button'
}

export default TextButton
