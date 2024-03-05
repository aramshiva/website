import Wrapper from "../components/wrapper";
export default function Uses() {
   return (
      <Wrapper>
         <div className="prose lg:prose-xl container mx-auto py-8">
            <h1 className="mb-4 block text-xl font-bold sm:text-3xl">
               My Setup
            </h1>
            <h4 className="mb-4 pt-5 font-bold">Office</h4>
            <ul>
               <li>Macbook Pro M3 14{'"'}</li>
               <li>LG Monitor</li>
               <li>Keychron K2 Pro w/Gateron Box Ink v2 Pinks</li>
               <li>Logitech G502 Hero</li>
               <li>LG 27{'"'} Class 4K UHD IPS LED Monitor</li>
               <li>Badger 2040 W</li>
               <li>Synology DS224+</li>
               <li>Branch Daily Chair</li>
            </ul>
            <h4 className="mb-4 pt-5 font-bold">Audio / Video</h4>
            <ul>
               <li>Jabra Speak 410</li>
               <li>Logitech C925-E</li>
            </ul>
            <h4 className="mb-4 pt-5 font-bold">Software</h4>
            <ul>
               <li>VS Code</li>
               <li>Figma</li>
               <li>Arc</li>
               <li>iTerm 2</li>
               <li>Reeder</li>
               <li>Fantastical</li>
               <li>Spotify</li>
            </ul>
            <h4 className="mb-4 pt-5 font-bold">Photography</h4>
            <ul>
               <li>
                  Panasonic Lumix DMC-GX85 (Lumix DMC-GX80 / Lumix DMC-GX7 Mark
                  II)
               </li>
               <li>Panasonic Lumix G Vario HD 12-32mm F3.5-5.6 Mega OIS</li>
               <li>Panasonic Lumix G 25mm F1.7 ASPH</li>
            </ul>
         </div>
      </Wrapper>
   );
}
