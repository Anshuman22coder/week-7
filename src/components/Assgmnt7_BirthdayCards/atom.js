import { atom } from "recoil";

export const showCardAtom = atom({
	key: "showingBIrthdayCard",
	default: false,
});

export const nameAtom = atom({
	key: "nameofBirthdayPerson",
	default: "",
});
