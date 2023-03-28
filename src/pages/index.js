import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import copy from "copy-to-clipboard";
import "react-toastify/dist/ReactToastify.css";
import Spotify from "@/Components/Logos/Spotify";
import Youtube from "@/Components/Logos/Youtube";
import Instagram from "@/Components/Logos/Instagram";
import Discord from "@/Components/Logos/Discord";
import Expand from "@/Components/Icons/Expand";
import axios from "axios";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form validation

  async function messageHandler(e) {
    e.preventDefault();
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let phoneRegex = /^[\+\(\s.\-\/\d\)]{5,30}$/;

    if (name === "") {
      return toast.error("Please enter a name", { theme: "dark" });
    }
    if (email === "") {
      return toast.error("Please enter an email", { theme: "dark" });
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid phone number", {
        theme: "dark",
      });
    }
    if (number !== "" && !phoneRegex.test(number)) {
      return toast.error("Please enter a valid phone number", {
        theme: "dark",
      });
    }
    if (subject === "") {
      return toast.error("Please mention a subject", { theme: "dark" });
    }
    if (message === "") {
      return toast.error("Please write a message", { theme: "dark" });
    }
    // Posting using axios
    // await axios.post("/api/add", {
    //   name: name,
    //   email: email,
    //   number: number,
    //   subject: subject,
    //   message: message,
    // });

    // NODE MAILER
    // await axios.post("/api/test", {
    //   name: name,
    //   email: email,
    //   number: number,
    //   subject: subject,
    //   message: message,
    // });

    try {
      await fetch(`/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, subject, message }),
      });
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }

    // console.log({ name, email, number, subject, message });

    return toast.success(
      "Message sent! I will get right back with you momentarily!",
      {
        theme: "dark",
      }
    );
  }

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>The Formante - Recording Services</title>
        <meta
          name="description"
          content="The Formante Recording Services, a recording studio for all your music production and audio engineering needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <section className={`${styles.introduction}`}>
          <div className={styles.introText}>
            <h1>THE FORMANTE</h1>
            <h3>RECORDING SERVICES</h3>
            <p>{`Welcome to The Formante Recording Services! If you're looking for a professional recording service that can cater to your needs wherever you are, you've come to the right place. Get in touch with me today and let's make some great music together :)`}</p>
          </div>
          <Link href={"#qna"} scroll={false} style={{ userSelect: "none" }}>
            <div className={styles.introIcon}>
              <Expand />
            </div>
          </Link>
        </section>
        <section className={`${styles.section} ${styles.qna}`} id="qna">
          <h1 className={styles.sectionHeading}>About Me</h1>
          <div className={styles.center}>
            <div className={`${styles.aboutGrid} ${styles.content}`}>
              <div className={styles.aboutItem}>
                <h1 className={styles.aboutQuestion}>
                  Who is The Formante? Tell us about yourself.
                </h1>
                <p className={styles.aboutAnswer}>
                  {`My name is Yedu Renjith, and I’m from Kerala, India. Currently, I’m a student at Cape Breton University, Canada. I’ve been producing music for over 5 years, mostly under the artist name “Candy Heist”. Further, I’ve been freelancing my services since the last 2 years and have worked with multiple artists around the world, primarily in my local scene.  `}
                </p>
              </div>
              <div className={styles.imageAbout}>
                <div className={styles.imageOverlay} />

                <Image
                  src="/images/7.JPG"
                  layout="fill"
                  objectFit="cover"
                  alt="me"
                  style={{ borderRadius: "1rem" }}
                />
              </div>
              <div className={styles.aboutItem}>
                <h1 className={styles.aboutQuestion}>
                  Describe your professional experience.
                </h1>
                <p className={styles.aboutAnswer}>
                  {`I started actively freelancing from the beginning of the COVID-19 pandemic, around March 2020. From then, I've worked with different kinds of artists making unique music. Most of my professional experience was with mixing vocals for rappers and singers. Regardless, I've worked on projects of different scales, providing full mix and masters and additional production services.`}
                </p>
              </div>
              <div className={styles.aboutItem}>
                <h1 className={styles.aboutQuestion}>Why should I hire you?</h1>
                <p className={styles.aboutAnswer}>
                  {`I offer competitive rates for my services, without compromising on quality. I understand that every project is unique, and I work with my clients to create a customized package that fits their needs and budget. Furthermore, I pride myself on my ability to communicate effectively with my clients, to ensure that their vision for their project is fully realised. I am always open to feedback and input, and work closely with my clients to achieve the desired result.`}
                </p>
              </div>
              <div className={styles.imageAbout}>
                <div className={styles.imageOverlay} />
                <Image
                  src="/images/8.JPG"
                  layout="fill"
                  objectFit="cover"
                  alt="me"
                  style={{ borderRadius: "1rem" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.services}`}>
          <h1 className={styles.sectionHeading}>Services</h1>
          <div className={`${styles.center} `}>
            <div className={`${styles.serviceGrid} ${styles.content}`}>
              <div className={styles.serviceGridItem}>
                <h1>
                  Recording <strong>[Only provided locally]</strong>
                </h1>
                <p>
                  {`If you're a recording artist in or around Sydney, I can travel
                  to your location with my equipment to set up a home studio.
                  The rates for travel is not additional to my hourly rate.`}
                </p>
              </div>
              <div className={styles.serviceGridItem}>
                <h1>Music Production</h1>
                <p>
                  {`Depending on your stylistic description, I can produce jingles for advertisements and even instrumentals for vocalists and rappers.`}
                </p>
              </div>
              <div className={styles.serviceGridItem}>
                <h1 style={{ textAlign: "center" }}>Mixing & Mastering</h1>
                <div className={styles.serviceSubGrid}>
                  <p>
                    {`With my 6 years of expertise in the craft, I can assure an exceptional quality in my mixes. `}
                  </p>
                  <p>
                    {`I prefer working with dry stems with no busses as this gives me full control of the sound.`}
                  </p>
                  <p>
                    {`Depending on the sound of your song, I can master your track uniquely, offering a bright, clean sound.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.work}`}>
          <h1 className={styles.sectionHeading}>Work</h1>
          <div className={styles.center}>
            <div className={`${styles.workGrid} ${styles.content}`}>
              <div className={styles.workItem}>
                <div className={styles.center}>
                  <div className={styles.embeder}>
                    <iframe
                      width="100% "
                      height="100%"
                      src="https://www.youtube.com/embed/-FEW5xcJ8aw"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className={styles.workItemText}>
                  <h1>{`IX FALL$ - ITCH (feat. Misheard) [Candy Heist Remix]`}</h1>
                  <p>Produced, Mixed & Mastered</p>
                </div>
              </div>
              <div className={styles.workItem}>
                <div className={styles.center}>
                  <div className={styles.embeder}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/kV8tv_2n5nE?start=9"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className={styles.workItemText}>
                  <h1>{`Sampreet - Thee Jwaalah ft ThirumaLi & Imbachi`}</h1>
                  <p>Additional Production, Mixing and Mastering</p>
                </div>
              </div>
              <div className={styles.workItem}>
                <div className={styles.center}>
                  <div className={styles.embeder}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/fC8QdHKArJ0?start=3"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className={styles.workItemText}>
                  <h1>{`Street Academics - Walayar`}</h1>
                  <p>Mixed and Mastered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.clientele}`}>
          <h1 className={styles.sectionHeading}>Clientele</h1>
          <div className={styles.center}>
            <div className={`${styles.clientGrid} ${styles.content}`}>
              <div className={styles.imageWrapper}>
                <div className={styles.filer}></div>
                <div className={styles.text}>
                  <p>Street Academics</p>
                </div>
                <div className={styles.hoverText}>
                  <h1 className={styles.heading}>Street Academics</h1>
                  <p className={styles.subheading}>Mixing & Mastering</p>
                </div>
                <Image
                  src={"/images/image2.jpeg"}
                  alt={"bruh"}
                  priority
                  placeholder="blur"
                  blurDataURL={"/images/image2.jpeg"}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.filer}></div>
                <div className={styles.text}>
                  <p>Pina Colada Blues</p>
                </div>
                <div className={styles.hoverText}>
                  <h1 className={styles.heading}>Pina Colada Blues</h1>
                  <p className={styles.subheading}>Mastering</p>
                </div>
                <Image
                  src={"/images/image1.jpeg"}
                  alt={"bruh"}
                  style={{ objectPosition: "50% 20%" }}
                  fill
                  sizes="(max-width: 768px) 100vw,"
                  className={styles.image}
                />
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.filer}></div>
                <div className={styles.text}>
                  <p>Sampreet</p>
                </div>
                <div className={styles.hoverText}>
                  <h1 className={styles.heading}>Sampreet</h1>
                  <p className={styles.subheading}>Mixing & Mastering</p>
                </div>
                <Image
                  src={"/images/image3.png"}
                  alt={"bruh"}
                  fill
                  sizes="(max-width: 768px) 100vw,"
                  className={styles.image}
                />
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.filer}></div>
                <div className={styles.text}>
                  <p>Nihal Sadiq</p>
                </div>
                <div className={styles.hoverText}>
                  <h1 className={styles.heading}>Nihal Sadiq</h1>
                  <p className={styles.subheading}>
                    Production, Mixing & Mastering
                  </p>
                </div>
                <Image
                  src={"/images/image4.jpg"}
                  alt={"bruh"}
                  fill
                  style={{ objectPosition: "50% 20%" }}
                  sizes="(max-width: 768px) 100vw,"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.reviews}`}>
          <h1 className={styles.sectionHeading}>Reviews</h1>
          <div className={styles.center}>
            <div className={`${styles.reviewsGrid} ${styles.content}`}>
              <div className={styles.reviewsGridItem}>
                <p>{`Just perfect. A Quick and professional job. Candyheist is also very kind and fun to work with. For sure we will work again soon. And as candyheist told me I'm telling you you: You will not regret!`}</p>
                <h3>-Fiverr</h3>
              </div>
              <div className={styles.reviewsGridItem}>
                <p>{`Candy Heist The best you can get! quick delivey, great comunication, very reliable and professional. Thank you so much! I'm waiting for the next gig together`}</p>
                <h3 style={{ marginTop: "2rem" }}>-Fiverr</h3>
              </div>
              <div className={styles.reviewsGridItem}>
                <p>{`They were soooo helpful, i had a back and forth with them about the mix and they were more than happy to revisit it when i wanted an honestly really small change, 100% recommend`}</p>
                <h3>-Fiverr</h3>
              </div>
              <div className={styles.reviewsGridItem}>
                <p>{`He is the best! I work only with him (:`}</p>
                <h3 style={{ marginTop: "4rem" }}>-Fiverr</h3>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.contact}`}>
          <h1 className={styles.sectionHeading}>Contact me</h1>
          <div className={`${styles.content}`} style={{ marginInline: "auto" }}>
            <header className={styles.contactHeader}>
              <h1>
                {
                  "Have a question, idea or want to work together on a project? Let's talk!"
                }
              </h1>
            </header>
            <form className={styles.form}>
              <input
                type="text"
                className={styles.input}
                autoComplete="new-password"
                value={name}
                placeholder="Name*"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                value={email}
                className={styles.input}
                placeholder="Email*"
                autoComplete="new-password"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                value={`${number}`}
                className={styles.input}
                placeholder="Phone Number"
                autoComplete="new-password"
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="text"
                value={subject}
                className={styles.input}
                placeholder="Subject*"
                autoComplete="new-password"
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${styles.input} ${styles.textArea}`}
                placeholder="Message*"
                autoComplete="new-password"
              />
              <div
                className={styles.formBtn}
                onClick={(e) => messageHandler(e)}
              >
                <div className={styles.btnText}>Send</div>
              </div>
            </form>
            <div className={styles.contactInfo}>
              <div className={styles.contactTextinfo}>
                <div
                  className={styles.contactText}
                  onClick={() => {
                    copy("formantemusic@gmail.com");
                    toast.success("Copied Email!", {
                      theme: "dark",
                    });
                  }}
                >
                  formantemusic@gmail.com
                </div>
                <div
                  className={styles.contactText}
                  onClick={() => {
                    copy("+1 782-882-5427");
                    toast.success("Copied Number!", { theme: "dark" });
                  }}
                >
                  +1 782-882-5427
                </div>
              </div>
              <div className={styles.logos}>
                <div
                  className={styles.contactLogo}
                  onClick={() => {
                    copy("The Formante#3389");
                    toast.success("Copied discord tag!", { theme: "dark" });
                  }}
                >
                  <Discord />
                </div>
                <Link
                  href="https://www.instagram.com/theformante/"
                  passHref={true}
                  target="_blank"
                >
                  <div className={styles.contactLogo}>
                    <Instagram />
                  </div>
                </Link>
                <Link
                  href="https://open.spotify.com/artist/6t7uj5uSApVdULpiJLK1sR?si=dc164fdcf6844564"
                  passHref={true}
                  target="_blank"
                >
                  <div className={styles.contactLogo}>
                    <Spotify />
                  </div>
                </Link>
                <Link
                  href="https://www.youtube.com/@candyheist5270"
                  passHref={true}
                  target="_blank"
                >
                  <div className={styles.contactLogo}>
                    <Youtube />
                  </div>
                </Link>
              </div>
              <p style={{ textAlign: "center", opacity: "0.4" }}>
                © {new Date().getFullYear()} The Formante Recording Services
              </p>
            </div>
          </div>
        </section>
        <ToastContainer />
      </main>
    </>
  );
}
