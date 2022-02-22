import DisplayItems from "../../../methods/displayItems/DisplayItems";
import { navTitles } from "./data/navTitles";
import "./TitleList.css";
import TitleView from "./view/TitleView";

export default function TitleList(params) {
  return (
    <>
      <div className=" hidden md:block TitleList w-full">
        <DisplayItems evenly items={navTitles} View={TitleView} />
      </div>
      <div className="block md:hidden TitleList w-full">
        <DisplayItems column end items={navTitles} View={TitleView} />
      </div>
    </>
  );
}
