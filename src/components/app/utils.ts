import { ApplicationsEnum } from "./domain"
import contactsIcon from "~/assets/apps/contacts.svg"
import settingsIcon from "~/assets/apps/settings.svg"
import hobbiesIcon from "~/assets/apps/hobbies.svg"
import experienceIcon from "~/assets/apps/experience.svg"
import linkedinIcon from "~/assets/apps/linkedin.svg"
import hrGameIcon from "~/assets/apps/rocketGameIcon.svg"
import youtubeIcon from "~/assets/apps/youtube.svg"
import githubIcon from "~/assets/apps/github.svg"
import frontmanIcon from "~/assets/apps/frontman.svg"

export const iconByApplication = {
  [ApplicationsEnum.CONTACTS]: contactsIcon,
  [ApplicationsEnum.EXPERIENCE]: experienceIcon,
  [ApplicationsEnum.HOBBIES]: hobbiesIcon,
  [ApplicationsEnum.SETTIGNS]: settingsIcon,
  [ApplicationsEnum.LINKEDIN]: linkedinIcon,
  [ApplicationsEnum.GITHUB]: githubIcon,
  [ApplicationsEnum.YOUTUBE]: youtubeIcon,
  [ApplicationsEnum.FRONTMAN]: frontmanIcon,
  [ApplicationsEnum.HRGAME]: hrGameIcon,
}
