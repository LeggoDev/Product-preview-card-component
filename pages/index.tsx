import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product preview card component</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main>
        <picture>
          <source
            srcSet='/images/image-product-mobile.jpg'
            media='(max-width: 600px)'
          />
          <img src='/images/image-product-desktop.jpg' alt='perfume' />
        </picture>
        <section>
          <span className='category'>Perfume</span>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p className='paragraphe'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <p className='price'>$149.99</p>
            <span>$169.99</span>
          </div>
          <button>
            <Image
              src='/images/icon-cart.svg'
              alt='cart icon'
              width={14.39}
              height={16}
            />
            <span>Add to Cart</span>
          </button>
        </section>
      </main>
    </div>
  );
}
