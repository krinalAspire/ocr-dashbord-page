import React from "react";

function Page() {
  return (
    <>
      <div className="card text-center m-5 ">
        <div classNameName="m-2 p-2">
        {/* <span className="pull-right clickable" data-effect="fadeOut"><i className="fa fa-times"></i></span> */}
        {/* <img src={x-circle} alt="Your SVG" /> */}
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle pull-right clickable" data-effect="fadeOut"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </div>
        <div className="card-body p-5">
          <h4 className="card-title fw-bold p-2">Upload Your Documents</h4>
          <p className="card-text">PDF, Word Documents, and images accepted.
          Documents will be intelligently classNameified into:Resumes, Receipts, invoices etc.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}


          <div className="container">
    <div className="row m-5">
         <div className="col-sm-4 card text-center" id="card1">
         <div className="card-body">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>

    <h5 className="card-title fw-bold">Manual Upload</h5>
    <p className="card-text m-3">Drag and Drop files from your computer or</p>
    <button className="btn text-white " id="button">Choose Files</button>
  </div>
         </div>

         
         <div className="col-sm-4 card text-center border-top-0 border-bottom-0" id="card2">
         <div className="card-body">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>

    <h5 className="card-title fw-bold">Use the API</h5>
    <p className="card-text m-3">Copy your <a href="#" className="text"><span classNameName="m-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
</span> API key</a></p>
<p className="card-text">Read the <a href="#" className="text"><span classNameName="m-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</span> API Docs</a></p>
<p className="card-text">View available <a href="#" className="text"><span classNameName="m-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
</span> Integrations</a></p>
  
  </div>
         </div>


         <div className="col-sm-4 card text-center border-top-0 border-bottom-0" id="card3">
         <div className="card-body">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>

    <h5 className="card-title fw-bold">Attach in an email</h5>
    <p className="card-text m-3">Send documents 1 by 1 or in bulk to the email for this workspace</p>
    <a href="#" className="text"><span classNameName="m-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</span> Copy email address</a>
  </div>
         </div>
    </div>
</div>

        </div>
      </div>
    </>
  );
}

export default Page;