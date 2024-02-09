type Props = {
   preview?: boolean;
   children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
   return (
      <>
         <div>
            <main>{children}</main>
         </div>
      </>
   );
};

export default Layout;
