import { ApplicationsEnum } from "./domain"
import contactsIcon from "~/assets/apps/contacts.svg"
import settingsIcon from "~/assets/apps/settings.svg"
import hobbiesIcon from "~/assets/apps/hobbies.svg"
import experienceIcon from "~/assets/apps/experience.svg"
import linkedinIcon from "~/assets/apps/linkedin.svg"
import hrGameIcon from "~/assets/apps/rocketGameIcon.svg"

export const iconByApplication = {
  [ApplicationsEnum.CONTACTS]: contactsIcon,
  [ApplicationsEnum.EXPERIENCE]: experienceIcon,
  [ApplicationsEnum.HOBBIES]: hobbiesIcon,
  [ApplicationsEnum.SETTIGNS]: settingsIcon,
  [ApplicationsEnum.LINKEDIN]: linkedinIcon,
  [ApplicationsEnum.GITHUB]: linkedinIcon,
  [ApplicationsEnum.YOUTUBE]: linkedinIcon,
  [ApplicationsEnum.FRONTMAN]: linkedinIcon,
  [ApplicationsEnum.HRGAME]: hrGameIcon,
}
