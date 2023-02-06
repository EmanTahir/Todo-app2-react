import React from 'react'

export default function Footer() {
    let footerStyle = {
        backgroundColor: 'orange',
        position: "relative",
        width: "100%",
        top: "100vh"
    }
    return (
        <div>
            <footer className="py-3" style={footerStyle}>
                <p className="text-center">Copyright &copy; MyTodosList.com</p>
            </footer>
        </div>
    )
}
