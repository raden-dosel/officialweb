import "@styles/globals.css";

//import Nav from "@components/Nav";
//import Provider from "@components/Provider";
//import { ThemeProvider } from "@components/Theme_Provider";


export const metadata = {
  title: "Sample Website",
  description: "This is a sample website made with Clothrecom",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
       
       
            <main>{children}</main>
        
      </body>
    </html>
  );
};

export default RootLayout;
