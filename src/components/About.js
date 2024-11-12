
export default function About(props) {
  //const [myStyle, setMyStyle] = useState({
   // color: "black",
    //backgroundColor: "white",
 // });
let myStyle={
  color:props.mode === 'dark'?'white':'black',
  backgroundColor:props.mode === 'dark'?'black':'white'
}

  {/*const [btntext, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",// this is the object
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  */
}
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <strong>With the large amounts of text data that businesses process every day, many companies are sitting on large untapped goldmines in the form of unstructured text documents. Using text analysis to break these massive amounts of data into sentences, phrases, keywords and sentiment, can allow you to better understand trends and topics present across all your files – regardless of the source.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>There are two ways to import data from a text file with Excel: you can open it in Excel, or you can import it as an external data range. To export data from Excel to a text file, use the Save As command and change the file type from the drop-down menu.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             Compatible With Browser
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>You can preview hundreds of file types in Microsoft Teams, OneDrive, and SharePoint, without installing the application used to create the file. The previews and thumbnail images appear in the web view and for customers using Files On-Demand in Windows 10.</strong>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
