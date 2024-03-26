export default function MessageList({ messages }) {
    // Inline styles to mimic a vintage digital interface
    const styles = {
      container: {
        backgroundColor: '#9b9b9b', // Dark gray background
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23c7c7c7'/%3E%3Cpath d='M50 0L100 50H0L50 0zm0 100L100 50H0L50 100z' fill='%239b9b9b' fill-opacity='0.1'/%3E%3C/svg%3E")`, // Adding a subtle pattern to the background
        border: '3px solid #000',
        borderRadius: '8px',
        fontFamily: '"Press Start 2P"', // Pixelated font for a vintage look
        fontSize: '24px',
        color: '#000',
        padding: '10px',
        maxWidth: '900px',
        maxHeight: '900px',
        minHeight: '400px',
        margin: '20px auto',
        overflowY: 'scroll',
      },
      list: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
      },
      listItem: {
        backgroundColor: '#e1e1e1', // Light gray for the message bubble
        borderRadius: '5px',
        padding: '5px 10px',
        margin: '5px 0',
        border: '1px solid #767676', // Darker border for depth
        wordWrap: 'break-word',
      },
      emptyMessage: {
        color: '#767676',
        textAlign: 'center',
        marginTop: '80px', // Vertically center in the empty container
      },
    };
  
    return (
      <div style={styles.container}>
        {messages.length > 0 ? (
          <ul style={styles.list}>
            {messages.map(message => (
              <li key={message.id} style={styles.listItem}>
                <p>{message.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.emptyMessage}>No messages yet...</p>
        )}
      </div>
    );
  }
  