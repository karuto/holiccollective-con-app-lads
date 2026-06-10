const variant = process.env.REACT_APP_VARIANT;

const configMap = {
  collective: {
    title: "Holic Collective Con App - Collective Version",
    description: `Holic Collective is a curated group of award-winning professional artists collaborating to create premium, visually striking merchandise for anime and video game fandoms. We are best known for our specialty effect prints and large-scale diorama standees, which combine technical innovation with high-impact visual storytelling to create standout convention experiences.`,
    descriptionAdditional: `Our primary audience consists of female fans aged 20–35, with an average convention order value of approximately $75. We have successfully exhibited at major North American conventions including Fan Expo, GalaxyCon, Anime Expo, Anime Central, Anime Los Angeles, and Anime NYC.

In addition, Holic Collective artists have been invited to participate in official events hosted by leading industry companies such as miHoYo, Yostar, and Tencent Games, and are recognized members of their official creator programs.`,
    disclaimer:
      "Holic Collective is a small passion project run by Holic. Please reach out to hi@holiccollective.com if you have any questions!",
  },
  personal: {
    title: "Holic Collective Con App - Personal Version",
    description:
      "Hi! I'm Holic, a California-based artist & specialty acrylic standee maker. Welcome to my studio! Your fandom deserves more than plain stickers, and so do you 🤘",
    descriptionAdditional: "",
    disclaimer:
      "Holic Collective is a small passion project run by Holic. Please reach out to hi@holiccollective.com if you have any questions!",
  },
  lads: {
    title: "Holic Collective Con App - Lads Version",
    description:
      "Hi! I'm Holic, a California-based artist & specialty acrylic standee maker. Welcome to my studio!",
    descriptionAdditional: "",
    disclaimer:
      "Holic Collective is a small passion project run by Holic. Please reach out to hi@holiccollective.com if you have any questions!",
  },
};

export default configMap[variant];
