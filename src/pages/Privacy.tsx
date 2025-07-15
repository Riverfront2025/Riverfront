import Nav from "../components/Nav"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Nav />

      <main className=" w-11/12 md:w-5/6 mx-auto font-raleway my-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4">
          This privacy policy sets out how <strong>www.riverfront.ae</strong>{" "}
          uses and protects any information that you give{" "}
          <strong>www.riverfront.ae</strong> when you use this website.
        </p>

        <p className="mb-4">
          www.riverfront.ae is committed to ensuring that your privacy is
          protected. Should we ask you to provide certain information by which
          you can be identified when using this website, then you can be assured
          that it will only be used in accordance with this privacy statement.
        </p>

        <p className="mb-4">
          We may change this policy from time to time by updating this page when
          necessary. You should check this page from time to time to ensure that
          you are happy with any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">What we gather</h2>
        <p className="mb-2">
          We may collect the following information for your property bookings or
          registration:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Full Name</li>
          <li>Email Id</li>
          <li>Contact No(s)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          What we do with the information we gather
        </h2>
        <p className="mb-4">
          We require this information to understand your needs and provide you
          with a better service. Such information remains confidential; we will
          never share it with a third party except where necessary to complete a
          property booking or registration request.
        </p>
        <p className="mb-4">
          We use information given to us in the following ways:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Internal record keeping</li>
          <li>To improve our products and services</li>
          <li>
            We may periodically send you promotional emails about new deals,
            special offers and other information which we believe you may find
            useful as you show interest in these categories of our products.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes.
          </li>
        </ul>
        <p className="mb-4">
          <strong>We will never sell your information.</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Security</h2>
        <p className="mb-4">
          We are committed to ensuring that your information is safe and secure.
          In order to prevent unauthorized access or disclosure, we have put in
          place suitable physical, electronic and managerial procedures to
          safeguard and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">How we use cookies</h2>
        <p className="mb-4">
          A cookie is a small file which asks permission to be placed on your
          computer’s hard drive. Once you agree, the file is added and the
          cookie helps analyze web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as
          an individual.
        </p>

        <p className="mb-4">
          We use traffic log cookies to identify which pages are being used.
          This helps us analyze data about webpage traffic and improve our
          website in order to tailor it to customer needs.
        </p>

        <p className="mb-4">
          Overall, cookies help us provide you with a better website by enabling
          us to monitor which pages you find useful and which you do not. A
          cookie in no way gives us access to your computer or any information
          about you, other than the data you choose to share with us.
        </p>

        <p className="mb-4">
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may however prevent you
          from taking full advantage of the website.
        </p>

        <p className="mt-6">
          For further information,{" "}
          <a
            href="mailto:inf0@riverfront.ae"
            className="text-[var(--primary-color)] underline"
          >
            Email Us
          </a>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
