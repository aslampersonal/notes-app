import React from 'react';
import './Note.css';
import { Collapse } from 'bootstrap'; // Import Bootstrap Collapse

function Note({ note }) {
    // Create a reference to the collapsible content
    const collapseRef = React.useRef(null);

    // Function to toggle the collapse
    const handleToggle = () => {
        const collapseElement = collapseRef.current;
        if (collapseElement) {
            if (collapseElement.classList.contains('show')) {
                collapseElement.classList.remove('show');
            } else {
                collapseElement.classList.add('show');
            }
        }
    };

    return (
        <div className="note" style={{ backgroundColor: note.backgroundColor }} onClick={handleToggle}>
            <h3>{note.title}</h3>
            {/* Collapsible content */}
            <div ref={collapseRef} className="collapse">
                <div>
                    <b>Description:</b><br />
                    {/* Render the formatted description using dangerouslySetInnerHTML */}
                    <div
                        dangerouslySetInnerHTML={{ __html: note.description }}
                    ></div>
                </div>
                {note.mediaLink && (
                    <div className="media-container">
                        {note.mediaLink.includes('youtube') ? (
                            <iframe
                                width="100%"
                                height="200"
                                src={note.mediaLink}
                                title={note.title}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img src={note.mediaLink} alt={note.title} />
                        )}
                    </div>
                )}
                <p className="timestamp">{note.timestamp.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default Note;
