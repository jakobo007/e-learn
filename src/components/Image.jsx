import React from 'react'

const Image = ({ src, alt, className, loading = 'lazy', width, height }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width} // Added for potential optimization and CLS
        height={height} // Added for potential optimization and CLS
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/cccccc/333333?text=Image+Load+Error"; }}
      />
    );
}

export default Image
