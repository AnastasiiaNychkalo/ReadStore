

const Footer:React.FC = () => {

  return (
    <>
      <footer className="px-4 py-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className={"flex flex-col md:flex-row justify-between items-start md:items-center gap-6"}>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">We're changing email to book trends</h2>
              <p className="text-gray-400">Information about new releases, book collections</p>
            </div>
            <div className={"flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto"}>
              <input type="email" placeholder="Input email" className={"w-full sm:w-80 px-4 py-2 border border-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-600"} />
              <button className={"w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition"}>Subscribe</button>
            </div>
          </div>
          <hr className="border-t border-gray-700" />
          <div className={"flex flex-wrap justify-center md:justify-between gap-6 text-sm sm:text-base"}>
            <a href="#" className={"hover:underline"}>About us</a>
            <a href="#" className={"hover:underline"}>Contact us</a>
            <a href="#" className={"hover:underline"}>Delivery and payment</a>
            <a href="#" className={"hover:underline"}>Privacy policy</a>
          </div>
          <hr className="border-t border-gray-700" />
          <div className="text-right text-sm text-gray-400">© 2025 ReadBook. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default Footer;