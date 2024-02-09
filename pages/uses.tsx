import Wrapper from "../components/page";
export default function Uses() {
   return (
      <Wrapper>
         <div className="container prose mx-auto py-8 lg:prose-xl">
            <h2 className="mb-4 font-bold">My Setup</h2>
            <h4 className="mb-4 font-bold">Office</h4>
            <ul>
               <li>Macbook Pro 14{'"'}</li>
               <li>LG Monitor</li>
               <li>Keychron K2 Pro w/Gateron Box Ink v2 Pinks</li>
               <li>Logitech G502 Hero</li>
               <li>LG 27{'"'} Class 4K UHD IPS LED Monitor</li>
               {/* <li>Badger 2040 W</li> */}
               <li>Synology DS224+</li>
               <li>Branch Daily Chair</li>
            </ul>
            <h4 className="mb-4 font-bold">Audio / Video</h4>
            <ul>
               <li>Jabra Speak 410</li>
               <li>Logitech C925-E</li>
            </ul>
            <h4 className="mb-4 font-bold">Coding</h4>
            <ul>
               <li>VS Code</li>
               <li>iTerm 2</li>
            </ul>
         </div>
      </Wrapper>
   );
}
