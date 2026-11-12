/**
 * Photos used around the site. To swap a photo, replace the file in
 * src/assets and keep the same name, or change the import below.
 * Edit `alt` (read aloud by screen readers) and `caption` freely.
 */
import atTheLaptop from "@/assets/at-the-laptop.jpeg";
import graduationDay from "@/assets/graduation-day.jpeg";
import graduationSunset from "@/assets/graduation-sunset.jpeg";
import portraitSmile from "@/assets/portrait-smile.jpeg";
import waterfall from "@/assets/waterfall.jpeg";

export const photos = {
  hero: {
    src: graduationSunset,
    alt: "Innocentia in a brown suit and graduation stole, standing on a Durban street at sunset",
    caption: "Graduation day",
  },
  portrait: {
    src: portraitSmile,
    alt: "Close-up portrait of Innocentia smiling, natural hair catching the sunlight",
    caption: "Me, unfiltered",
  },
  graduation: {
    src: graduationDay,
    alt: "Innocentia in graduation regalia, holding a certificate and flowers, beside another woman at a Durban University of Technology ceremony",
    caption: "Graduation · Durban University of Technology",
  },
  laptop: {
    src: atTheLaptop,
    alt: "Innocentia laughing while working on a laptop in a computer lab with classmates",
    caption: "Heads down, building — and laughing along the way",
  },
  waterfall: {
    src: waterfall,
    alt: "Innocentia standing at the edge of a pool, looking up at a waterfall",
    caption: "Always looking ahead",
  },
};
