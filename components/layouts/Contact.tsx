import GetInTouch from '../forms/GetInTouch';

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-12 text-center">Contact</h2>

        <div className="max-w-xl mx-auto">
          <GetInTouch />
        </div>
      </div>
    </section>
  );
};

export default Contact;
