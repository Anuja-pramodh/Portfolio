import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1>Hi, I'm <span>Anuja Pramodh</span></h1>
      <p>
        Computer Science Student at CINEC Campus, specializing in Software Engineering 
        offered by University of Wolverhampton, UK. [cite: 32, 33, 34]
      </p>
      <div className="btn-group">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="mailto:pramodhanuja4@gmail.com" className="btn-secondary">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;