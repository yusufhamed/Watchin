import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <Image
          src="https://www.userlogos.org/files/logos/voodoo/trakt.png"
          alt="Trakt Logo"
          width={120}
          height={30}
          className="mr-2"
        />
      </div>
    </footer>
  );
}

export default Footer;
