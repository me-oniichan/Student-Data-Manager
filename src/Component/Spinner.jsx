export default function Spinner() {
    return (
        <div className="d-flex justify-content-center" style={{margin : "auto", width : 5 + "em", height: 5+"em"}}>
            <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div >
    )
}