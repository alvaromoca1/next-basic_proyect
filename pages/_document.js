//agregamos esto para poder  modificar el head e incluir las librerias javascript que utilizaremos en nuestro proyecto
import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <script src="/js/main.js"></script> 
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument