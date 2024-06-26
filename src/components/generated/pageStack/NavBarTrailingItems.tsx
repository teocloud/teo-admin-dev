// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactNode, Suspense, useContext, useState } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"
import { useLang, usePreferences } from "../../../lib/generated/preferences"
import { useTranslation } from "react-i18next"
import WithTooltip from "../tooltip/WithTooltip"
import Tooltip from "../tooltip/Tooltip"
import RoundedButtonElement from "../button/RoundedButtonElement"
import { IoLanguage, IoNotifications } from "react-icons/io5"
import StatusBarUserAvatar from "../statusBar/StatusBarUserAvatar"
import { signOut, useAccount } from "../../../lib/generated/signIn"
import Modal from "../modal/Modal"
import ModalSheet from "../modal/ModalSheet"
import ModalSheetTitle from "../modal/ModalSheetTitle"
import ModalSheetDescription from "../modal/ModalSheetDescription"
import SelectList from "../selectList/SelectList"
import { languageNamesArray, languageNamesMap } from "../../../lib/generated/translations/languages"
import SelectListVerticalLayout from "../selectList/SelectListVerticalLayout"
import SelectListItem from "../selectList/SelectListItem"
import StatusBarLanguageListCell from "../statusBar/StatusBarLanguageListCell"
import Button from "../../extended/button/Button"
import StatusBarDefaultTrailingItemsShimmer from "../statusBar/StatusBarDefaultTrailingItemsShimmer"
import { RiTerminalLine } from "react-icons/ri"
import DeveloperCodeContainer from "./DeveloperCodeContainer"

type NavBarTrailingItemsProps = {
    children?: ReactNode | ReactNode[]
}

const NavBarTrailingItems = ({ children }: NavBarTrailingItemsProps) => {

    const context = useContext(NavBarRenderStateContext)
    context.trailing = true

    return <NavBarItemsContainerElement>
        {children}
        <Suspense fallback={<StatusBarDefaultTrailingItemsShimmer />}>
            <NavBarTrailingGlobalItems />
        </Suspense>
    </NavBarItemsContainerElement>
}

const NavBarTrailingGlobalItems = () => {
    const _ = useAccount()
    const [preferences] = usePreferences()
    const [developerModalIsOpen, setDeveloperModalIsOpen] = useState(false)
    const [langModalIsOpen, setLangModalIsOpen] = useState(false)
    const [lang, setLang] = useLang()
    const [selectedLang, setSelectedLang] = useState(lang)
    const { t, i18n } = useTranslation("translations")
    return <>
        {process.env.NODE_ENV === 'development' ? <WithTooltip tooltip={<Tooltip>{t("statusBar.devButton.tooltip")}</Tooltip>}>
            <RoundedButtonElement onClick={() => setDeveloperModalIsOpen(!developerModalIsOpen)}>
                <RiTerminalLine />
            </RoundedButtonElement>
        </WithTooltip> : null}
        <WithTooltip tooltip={<Tooltip>{t("statusBar.langButton.tooltip")}</Tooltip>}>
            <RoundedButtonElement onClick={() => setLangModalIsOpen(!langModalIsOpen)}>
                <IoLanguage />
            </RoundedButtonElement>
        </WithTooltip>
        <WithTooltip tooltip={<Tooltip>{t("statusBar.notificationButton.tooltip")}</Tooltip>}>
            <RoundedButtonElement>
                <IoNotifications />
            </RoundedButtonElement>
        </WithTooltip>
        <StatusBarUserAvatar name='V' onClick={signOut} />
        <Modal isOpen={langModalIsOpen} setIsOpen={setLangModalIsOpen} dismissWithEscKey dismissWithOutsideClick>
            <ModalSheet>
                <ModalSheetTitle>{t("statusBar.lang.language")}</ModalSheetTitle>
                <ModalSheetDescription>{t("statusBar.lang.selectALanguage")}</ModalSheetDescription>
                <SelectList selectedIndex={languageNamesArray.indexOf(selectedLang)} setSelectedIndex={(index) => setSelectedLang(languageNamesArray[index as any])}>
                    <SelectListVerticalLayout>
                        {languageNamesArray.map((name) => <SelectListItem key={name}>
                            <StatusBarLanguageListCell>
                                {languageNamesMap[name]}
                            </StatusBarLanguageListCell>
                        </SelectListItem>)}
                    </SelectListVerticalLayout>
                </SelectList>
                <Button onClick={() => {
                    setLang(selectedLang)
                    setLangModalIsOpen(false)
                    i18n.changeLanguage(selectedLang)
                }}>{t("confirm")}</Button>
            </ModalSheet>
        </Modal>
        <Modal isOpen={developerModalIsOpen} setIsOpen={setDeveloperModalIsOpen}  dismissWithEscKey dismissWithOutsideClick>
            <ModalSheet>
                <ModalSheetTitle>Default Configuration</ModalSheetTitle>
                <ModalSheetDescription>Replace content of "src/lib/extended/defaultPreferences.ts" with the following content.</ModalSheetDescription>
                <DeveloperCodeContainer>
                    <pre>
                        // This file is generated by Teo generator for extending purpose.
                        <br />
                        // The file content will not be overwritten between generations. Be careful to 
                        <br />
                        // modify this file. Do not modify export names and siganatures. Modify values 
                        <br />
                        // with care.
                        <br />
                        <br />
                        import mergePreferences from "../generated/mergePreferences"
                        <br />
                        <br />
                        export default mergePreferences(
                        {JSON.stringify(preferences, null, 4).replaceAll("\n", "    \n")})
                    </pre>
                </DeveloperCodeContainer>
                <Button onClick={() => {
                    setDeveloperModalIsOpen(false)
                }}>{t("confirm")}</Button>                
            </ModalSheet>
        </Modal>
    </>
}

export default NavBarTrailingItems