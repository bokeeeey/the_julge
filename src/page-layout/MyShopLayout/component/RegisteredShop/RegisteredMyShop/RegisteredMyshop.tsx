import classNames from "classnames/bind";
import styles from "@/page-layout/MyShopLayout/component/RegisteredShop/RegisteredMyShop/RegisteredMyShop.module.scss";

import { RegisterdShop as RegistseredMyShopProps } from "@/page-layout/MyShopLayout/type";

import PostContainer from "./PostContainer/PostContainer";

const cn = classNames.bind(styles);

export default function RegistseredMyShop({ lastRef, myShopData }: RegistseredMyShopProps) {
  console.log(myShopData);

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myRegisterdShop")}>내가 등록한 공고</p>
        <div className={cn("gridContainer")}>
          {myShopData?.map((item, idx) => (
            <div key={item.item.id}>
              <PostContainer myShopData={item} />
              <div ref={idx === myShopData.length - 1 ? lastRef : null} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
