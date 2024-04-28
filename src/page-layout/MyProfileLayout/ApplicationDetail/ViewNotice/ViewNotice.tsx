import classNames from "classnames/bind";
import Button from "@/common/components/Button/Button";

import { useRouter } from "next/router";
import styles from "@/page-layout/MyProfileLayout/ApplicationDetail/ViewNotice/ViewNotice.module.scss";

const cn = classNames.bind(styles);

export default function ViewNotice() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    // TODO: 공고 리스트 페이지로 이동
  };

  return (
    <div className={cn("container")}>
      <div className={cn("registerContiner")}>
        <p className={cn("myProfile")}>신청 내역</p>
        <div className={cn("register")}>
          <p className={cn("registerText")}>아직 신청 내역이 없어요.</p>
          <Button size="large" onClick={handleClick}>
            공고 보러가기
          </Button>
        </div>
      </div>
    </div>
  );
}
