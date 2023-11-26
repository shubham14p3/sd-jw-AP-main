import React from "react";
import SelectInput from "../../../component/form/SelectInput";
import DoughnutChart from "../../../component/chart/Doughnut";
import { projects } from "../../../data/projects";
import TaskCard from "../../../component/cards/TaskCard";

const data = {
  labels: ["Total Task", "Completed Task"],
  datasets: [
    {
      label: "My First Dataset",
      data: [22, 78],
      backgroundColor: ["#E4F2FF", "#F2C94C"],
      hoverOffset: 2,
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  cutout: 105,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Sell History",
    },
  },
};

function Overview() {
  return (
    <div className="tab-pane fade show active">
      <div className="crancy-upcontent__text">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia Ladkrabang. which is doing a
          graduation project aboutdesign thinking. I'd like to know about your
          design template
        </p>
      </div>

      <div className="row">
        <div className="col-xxl-4 col-lg-6 col-12">
          <div className="crancy-uactivity crancy-uactivity--v2 mg-top-30">
            <div className="crancy-flex-between mg-btm-20">
              <h3 className="crancy-uactivity__heading m-0">Task Progress</h3>
              <SelectInput
                options={["Last 7 Days", "Last 15 Days", "Last 30 Days"]}
              />
            </div>
            <div className="crancy-task__chart crancy-chart__inside crancy-chart_ptask">
              <DoughnutChart options={options} data={data} />
              <div className="myChart-progress">
                <h4 className="myChart-progress__number">
                  78<span>%</span>
                </h4>
                <p className="myChart-progress__text">Task Completed</p>
              </div>
            </div>
            <ul className="crancy-progress-list crancy-progress-list__initial mg-top-20">
              <li>
                <span className="crancy-progress-list__color crancy-color9__bg"></span>
                <p>
                  <span>Complated Task</span> <b>:</b> 18
                </p>
              </li>
              <li>
                <span className="crancy-progress-list__color crancy-offwhite__bg"></span>
                <p>
                  <span>Total Task</span> <b>:</b> 243
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xxl-4 col-lg-6 col-12">
          <div className="crancy-uactivity  crancy-uactivity--v2 mg-top-30">
            <h3 className="crancy-uactivity__heading">User Activities</h3>
            <ul className="crancy-uactivity__list">
              <li>
                <h4 className="crancy-uactivity__title">
                  Your Account is logged in
                </h4>
                <div className="crancy-uactivity__meta">
                  <span className="crancy-uactivity__label crancy-color1">
                    Mac Book Pro
                  </span>
                  <span className="crancy-uactivity__time">10:34PM</span>
                </div>
              </li>
              <li className="crancy-uactivity__list__two">
                <h4 className="crancy-uactivity__title">
                  Update your name & Address
                </h4>
                <div className="crancy-uactivity__meta">
                  <span className="crancy-uactivity__label crancy-color2">
                    Redmi Phone
                  </span>
                  <span className="crancy-uactivity__time">12:49PM</span>
                </div>
              </li>
              <li className="crancy-uactivity__list__three">
                <h4 className="crancy-uactivity__title">
                  Update Setting language
                </h4>
                <div className="crancy-uactivity__meta">
                  <span className="crancy-uactivity__label crancy-gcolor">
                    Laptop xioami
                  </span>
                  <span className="crancy-uactivity__time">10:34PM</span>
                </div>
              </li>
              <li className="crancy-uactivity__list__four">
                <h4 className="crancy-uactivity__title">
                  Your Account is logged in
                </h4>
                <div className="crancy-uactivity__meta">
                  <span className="crancy-uactivity__label crancy-color5">
                    Mac Book Pro
                  </span>
                  <span className="crancy-uactivity__time">02:23PM</span>
                </div>
              </li>
            </ul>
            <div className="crancy-see__all mg-top-20">
              <a href="#">
                See All{" "}
                <svg
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.31067 5.12982C3.22077 4.09604 2.15567 3.08694 1.09058 2.07715C0.823994 1.82419 0.55369 1.57671 0.292686 1.31758C-0.0278346 0.998126 -0.0637925 0.579951 0.189772 0.256381C0.441477 -0.0644482 0.829574 -0.0918694 1.15505 0.215249C2.67892 1.65212 4.20093 3.09242 5.71798 4.53821C6.09244 4.89469 6.0943 5.36428 5.7217 5.7187C4.18791 7.17819 2.64916 8.63152 1.10856 10.0814C0.788656 10.3824 0.39126 10.3419 0.147615 10.0101C-0.0885909 9.68792 -0.0389939 9.25192 0.279667 8.9496C1.47 7.81916 2.66342 6.69215 3.85561 5.56308C4.00254 5.4246 4.14885 5.28407 4.31067 5.12982Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-lg-12 col-12">
          <div className="crancy-uactivity crancy-uactivity--v2  mg-top-30">
            <h3 className="crancy-uactivity__heading">Work & Education</h3>
            <ul className="crancy-uwork__list">
              <li>
                <div className="crancy-uwork__icon crancy-color1__opacity--bg">
                  <svg
                    className="crancy-color1__fill"
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.46045 2.53517C6.48107 2.21951 6.4888 1.968 6.51457 1.71818C6.60992 0.7881 7.29283 0.063953 8.24547 0.0394772C10.0477 -0.00694249 11.8516 -0.0120065 13.6538 0.0276613C14.7258 0.0512931 15.4087 0.776284 15.4981 1.82875C15.5161 2.03806 15.5187 2.24821 15.5316 2.53517C15.7059 2.53517 15.87 2.53517 16.0332 2.53517C17.722 2.53517 19.4117 2.53348 21.1005 2.53601C21.8066 2.53686 21.9981 2.72338 21.9981 3.40617C21.999 7.90635 22.0007 12.4057 21.9973 16.9059C21.9964 18.209 21.2268 18.9922 19.8979 18.9939C13.9716 19.0032 8.04532 19.0023 2.11904 18.9947C0.765242 18.9931 -0.000132469 18.2157 -0.000132469 16.8831C-0.000991475 12.3972 -0.000132469 7.91141 0.000726537 3.42558C0.000726537 2.72507 0.194862 2.53686 0.926735 2.53601C2.58719 2.53348 4.24765 2.53517 5.90811 2.53517C6.07648 2.53517 6.2457 2.53517 6.46045 2.53517ZM7.74982 11.4013C7.56771 11.4013 7.41481 11.4013 7.26104 11.4013C6.27319 11.4013 5.28533 11.4098 4.29747 11.398C3.2366 11.3853 2.6164 10.938 2.26936 9.96316C2.19892 9.76398 2.13364 9.56395 2.06578 9.36393C1.83299 8.68029 1.6002 7.99666 1.32961 7.20415C1.30298 7.36957 1.29181 7.40839 1.29181 7.44722C1.29095 10.6257 1.28924 13.8042 1.29267 16.9835C1.29353 17.5203 1.53491 17.7279 2.14824 17.7279C8.04703 17.7304 13.9458 17.7304 19.8438 17.7279C20.5069 17.7279 20.7071 17.5211 20.7079 16.8637C20.7088 13.7831 20.7088 10.7033 20.7079 7.62277C20.7079 7.52486 20.6976 7.42612 20.6916 7.32821C20.3317 8.19162 20.0431 9.05671 19.7458 9.91843C19.3936 10.9422 18.7691 11.3895 17.6645 11.3988C16.6766 11.4072 15.6888 11.3996 14.7009 11.4022C14.5506 11.4022 14.4002 11.4174 14.2508 11.4258C14.2379 11.5482 14.2267 11.6174 14.2241 11.6874C14.1941 12.5424 14.0669 12.6673 13.214 12.6673C11.6823 12.6682 10.1499 12.6707 8.61827 12.6656C7.99034 12.6639 7.79621 12.469 7.77473 11.8621C7.77129 11.7254 7.76099 11.5887 7.74982 11.4013ZM1.58387 3.8307C1.60191 3.92016 1.60707 3.98768 1.62854 4.05014C2.25562 5.90186 2.88785 7.7519 3.50977 9.60531C3.64549 10.0096 3.93326 10.1353 4.33098 10.1336C5.31883 10.1294 6.30669 10.1337 7.29455 10.132C7.44573 10.132 7.59606 10.1176 7.7481 10.11C7.76013 9.97498 7.77129 9.89142 7.77387 9.80787C7.79878 9.01283 7.94395 8.86766 8.73768 8.86681C10.2839 8.86513 11.8301 8.86344 13.3763 8.8685C14.0051 8.87019 14.2018 9.06515 14.2224 9.66945C14.2276 9.80618 14.237 9.94291 14.2465 10.1083C15.5023 10.1083 16.729 10.1303 17.9539 10.0847C18.1412 10.0779 18.3963 9.78424 18.4805 9.57071C18.7863 8.79929 19.0337 8.00678 19.3009 7.22103C19.6797 6.10442 20.0551 4.98613 20.4451 3.83154C14.1365 3.8307 7.87266 3.8307 1.58387 3.8307ZM14.1597 2.50816C14.3246 1.70046 14.134 1.29028 13.5481 1.28352C11.8464 1.26411 10.1439 1.27171 8.44132 1.28099C8.03501 1.28268 7.80995 1.51394 7.7859 1.91399C7.77473 2.10473 7.78418 2.29632 7.78418 2.50816C9.94887 2.50816 12.0577 2.50816 14.1597 2.50816ZM12.891 11.3709C12.891 10.9489 12.891 10.5556 12.891 10.1699C11.6025 10.1699 10.3552 10.1699 9.10189 10.1699C9.10189 10.5886 9.10189 10.9726 9.10189 11.3709C10.3827 11.3709 11.6299 11.3709 12.891 11.3709Z" />
                  </svg>
                </div>
                <div className="crancy-uwork__content">
                  <h4 className="crancy-uwork__title">
                    Product Manger at{" "}
                    <span className="crancy-color1">DroitLab</span>
                  </h4>
                  <p className="crancy-uwork__time crancy-color1">
                    2023 - Present
                  </p>
                </div>
              </li>
              <li>
                <div className="crancy-uwork__icon crancy-color2__opacity--bg">
                  <svg
                    className="crancy-color8__fill"
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.46045 2.53517C6.48107 2.21951 6.4888 1.968 6.51457 1.71818C6.60992 0.7881 7.29283 0.063953 8.24547 0.0394772C10.0477 -0.00694249 11.8516 -0.0120065 13.6538 0.0276613C14.7258 0.0512931 15.4087 0.776284 15.4981 1.82875C15.5161 2.03806 15.5187 2.24821 15.5316 2.53517C15.7059 2.53517 15.87 2.53517 16.0332 2.53517C17.722 2.53517 19.4117 2.53348 21.1005 2.53601C21.8066 2.53686 21.9981 2.72338 21.9981 3.40617C21.999 7.90635 22.0007 12.4057 21.9973 16.9059C21.9964 18.209 21.2268 18.9922 19.8979 18.9939C13.9716 19.0032 8.04532 19.0023 2.11904 18.9947C0.765242 18.9931 -0.000132469 18.2157 -0.000132469 16.8831C-0.000991475 12.3972 -0.000132469 7.91141 0.000726536 3.42558C0.000726536 2.72507 0.194862 2.53686 0.926735 2.53601C2.58719 2.53348 4.24765 2.53517 5.90811 2.53517C6.07648 2.53517 6.2457 2.53517 6.46045 2.53517ZM7.74982 11.4013C7.56771 11.4013 7.41481 11.4013 7.26104 11.4013C6.27319 11.4013 5.28533 11.4098 4.29747 11.398C3.2366 11.3853 2.6164 10.938 2.26936 9.96316C2.19892 9.76398 2.13364 9.56395 2.06578 9.36393C1.83299 8.68029 1.6002 7.99666 1.32961 7.20415C1.30298 7.36957 1.29181 7.40839 1.29181 7.44722C1.29095 10.6257 1.28924 13.8042 1.29267 16.9835C1.29353 17.5203 1.53491 17.7279 2.14824 17.7279C8.04703 17.7304 13.9458 17.7304 19.8438 17.7279C20.5069 17.7279 20.7071 17.5211 20.7079 16.8637C20.7088 13.7831 20.7088 10.7033 20.7079 7.62277C20.7079 7.52486 20.6976 7.42612 20.6916 7.32821C20.3317 8.19162 20.0431 9.05671 19.7458 9.91843C19.3936 10.9422 18.7691 11.3895 17.6645 11.3988C16.6766 11.4072 15.6888 11.3996 14.7009 11.4022C14.5506 11.4022 14.4002 11.4174 14.2508 11.4258C14.2379 11.5482 14.2267 11.6174 14.2241 11.6874C14.1941 12.5424 14.0669 12.6673 13.214 12.6673C11.6823 12.6682 10.1499 12.6707 8.61827 12.6656C7.99034 12.6639 7.79621 12.469 7.77473 11.8622C7.77129 11.7254 7.76099 11.5887 7.74982 11.4013ZM1.58387 3.8307C1.60191 3.92016 1.60707 3.98768 1.62854 4.05014C2.25562 5.90186 2.88785 7.7519 3.50977 9.60531C3.64549 10.0096 3.93326 10.1353 4.33098 10.1336C5.31883 10.1294 6.30669 10.1336 7.29455 10.132C7.44573 10.132 7.59606 10.1176 7.7481 10.11C7.76013 9.97498 7.77129 9.89142 7.77387 9.80787C7.79878 9.01283 7.94395 8.86766 8.73768 8.86681C10.2839 8.86513 11.8301 8.86344 13.3763 8.8685C14.0051 8.87019 14.2018 9.06515 14.2224 9.66945C14.2276 9.80618 14.237 9.94291 14.2465 10.1083C15.5023 10.1083 16.729 10.1303 17.9539 10.0847C18.1412 10.0779 18.3963 9.78424 18.4805 9.57071C18.7863 8.79929 19.0337 8.00678 19.3009 7.22103C19.6797 6.10442 20.0551 4.98613 20.4451 3.83154C14.1365 3.8307 7.87266 3.8307 1.58387 3.8307ZM14.1597 2.50816C14.3246 1.70046 14.134 1.29028 13.5481 1.28352C11.8464 1.26411 10.1439 1.27171 8.44132 1.28099C8.03501 1.28268 7.80995 1.51394 7.7859 1.91399C7.77473 2.10473 7.78418 2.29632 7.78418 2.50816C9.94887 2.50816 12.0577 2.50816 14.1597 2.50816ZM12.891 11.3709C12.891 10.9489 12.891 10.5556 12.891 10.1699C11.6025 10.1699 10.3552 10.1699 9.10189 10.1699C9.10189 10.5886 9.10189 10.9726 9.10189 11.3709C10.3827 11.3709 11.6299 11.3709 12.891 11.3709Z" />
                  </svg>
                </div>
                <div className="crancy-uwork__content">
                  <h4 className="crancy-uwork__title">
                    Ui ux designer at{" "}
                    <span className="crancy-gcolor">Drobok</span>
                  </h4>
                  <p className="crancy-uwork__time crancy-gcolor">
                    2023 - Present
                  </p>
                </div>
              </li>
              <li>
                <div className="crancy-uwork__icon crancy-color4__opacity--bg">
                  <svg
                    className="crancy-color2__fill"
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.2386 6.50128C20.6788 6.6992 20.1578 6.86219 19.6611 7.07758C19.5563 7.12318 19.4874 7.36281 19.4865 7.51416C19.4729 8.83945 19.4544 10.1667 19.4903 11.491C19.5059 12.0586 19.2788 12.4428 18.8655 12.7755C17.7508 13.6749 16.4478 14.1319 15.0633 14.3657C12.5961 14.7809 10.1386 14.7596 7.72089 14.0348C6.75264 13.7448 5.83386 13.3276 5.12659 12.5863C4.90733 12.3564 4.74336 11.9751 4.73366 11.6579C4.69194 10.2685 4.7065 8.87729 4.72202 7.487C4.7259 7.17751 4.625 7.0378 4.33006 6.93302C3.11247 6.50225 1.90845 6.03656 0.69474 5.59512C0.321214 5.45929 0.00590099 5.28174 7.98191e-05 4.83351C-0.00574135 4.38431 0.307632 4.1961 0.680187 4.06124C4.36984 2.7311 8.05464 1.38932 11.7501 0.0747068C12.0276 -0.0242531 12.4001 -0.0252233 12.6776 0.0737366C16.3721 1.38835 20.0579 2.73013 23.7466 4.06221C24.1211 4.19707 24.4335 4.39208 24.4277 4.83643C24.4218 5.27883 24.1056 5.4622 23.7301 5.59803C22.6949 5.97252 22.6968 5.97931 22.6968 7.08825C22.6968 8.75407 22.7056 10.4189 22.69 12.0848C22.6871 12.4175 22.7677 12.661 23.0151 12.891C23.5351 13.3761 24.0318 13.8864 24.5276 14.3967C24.9496 14.8304 24.9477 15.1777 24.5218 15.6153C24.0144 16.1373 23.4788 16.6321 22.9898 17.1695C22.8356 17.3393 22.7376 17.6023 22.7094 17.8341C22.6638 18.2164 22.7065 18.6093 22.6939 18.9964C22.6774 19.4825 22.3805 19.7813 21.9478 19.7697C21.5365 19.759 21.2668 19.466 21.2415 19.0042C21.2406 18.9877 21.2386 18.9712 21.2415 18.9557C21.4744 17.7895 20.9747 16.9493 20.0754 16.2692C19.8454 16.0955 19.6572 15.8646 19.4544 15.656C18.9713 15.1593 18.9732 14.8353 19.47 14.3317C19.9813 13.8136 20.5032 13.3062 21.0087 12.7833C21.1125 12.6756 21.2299 12.5184 21.2309 12.3836C21.2435 10.4461 21.2386 8.50764 21.2386 6.50128ZM21.519 4.83934C21.3269 4.75687 21.258 4.72194 21.1862 4.69575C18.2921 3.64406 15.399 2.58848 12.5001 1.55231C12.3119 1.48537 12.0548 1.51157 11.8597 1.58045C9.01999 2.5943 6.18605 3.62174 3.35113 4.64821C3.22016 4.69575 3.095 4.75978 2.9291 4.83351C3.01739 4.88105 3.05328 4.90725 3.09403 4.92277C5.99589 5.99969 8.89774 7.07855 11.8044 8.14285C11.9665 8.20203 12.1877 8.18845 12.3555 8.13218C13.12 7.87799 13.8768 7.5976 14.6345 7.32401C16.8922 6.51098 19.1498 5.69505 21.519 4.83934ZM6.17343 7.62671C6.17343 8.63862 6.17343 9.55739 6.17343 10.4771C6.17343 11.8015 6.22388 11.8791 7.45409 12.3875C7.63261 12.4612 7.815 12.5272 7.99934 12.5854C9.78256 13.1481 11.6123 13.2568 13.4625 13.1083C14.6597 13.0123 15.8201 12.7649 16.9329 12.2866C17.7023 11.9557 18.1447 11.522 18.0428 10.5829C17.9419 9.64665 18.0205 8.69198 18.0205 7.68201C17.7828 7.7538 17.6159 7.79649 17.4539 7.8547C16.0879 8.34659 14.7005 8.78803 13.3655 9.35365C12.4496 9.74173 11.6482 9.72233 10.7363 9.33425C9.2703 8.70847 7.75194 8.20979 6.17343 7.62671ZM23.0141 15.039C22.6406 14.647 22.302 14.291 22.0458 14.0222C21.6529 14.356 21.2774 14.6752 20.9262 14.974C21.292 15.3582 21.6306 15.7152 21.9575 16.0587C22.3214 15.7075 22.6677 15.3737 23.0141 15.039Z" />
                  </svg>
                </div>
                <div className="crancy-uwork__content">
                  <h4 className="crancy-uwork__title">
                    Student at <span className="crancy-color2">Calloge</span>
                  </h4>
                  <p className="crancy-uwork__time crancy-color2">2019-2022</p>
                </div>
              </li>
              <li>
                <div className="crancy-uwork__icon crancy-color2__opacity--bg">
                  <svg
                    className="crancy-color8__fill"
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.46045 2.53517C6.48107 2.21951 6.4888 1.968 6.51457 1.71818C6.60992 0.7881 7.29283 0.063953 8.24547 0.0394772C10.0477 -0.00694249 11.8516 -0.0120065 13.6538 0.0276613C14.7258 0.0512931 15.4087 0.776284 15.4981 1.82875C15.5161 2.03806 15.5187 2.24821 15.5316 2.53517C15.7059 2.53517 15.87 2.53517 16.0332 2.53517C17.722 2.53517 19.4117 2.53348 21.1005 2.53601C21.8066 2.53686 21.9981 2.72338 21.9981 3.40617C21.999 7.90635 22.0007 12.4057 21.9973 16.9059C21.9964 18.209 21.2268 18.9922 19.8979 18.9939C13.9716 19.0032 8.04532 19.0023 2.11904 18.9947C0.765242 18.9931 -0.000132469 18.2157 -0.000132469 16.8831C-0.000991475 12.3972 -0.000132469 7.91141 0.000726536 3.42558C0.000726536 2.72507 0.194862 2.53686 0.926735 2.53601C2.58719 2.53348 4.24765 2.53517 5.90811 2.53517C6.07648 2.53517 6.2457 2.53517 6.46045 2.53517ZM7.74982 11.4013C7.56771 11.4013 7.41481 11.4013 7.26104 11.4013C6.27319 11.4013 5.28533 11.4098 4.29747 11.398C3.2366 11.3853 2.6164 10.938 2.26936 9.96316C2.19892 9.76398 2.13364 9.56395 2.06578 9.36393C1.83299 8.68029 1.6002 7.99666 1.32961 7.20415C1.30298 7.36957 1.29181 7.40839 1.29181 7.44722C1.29095 10.6257 1.28924 13.8042 1.29267 16.9835C1.29353 17.5203 1.53491 17.7279 2.14824 17.7279C8.04703 17.7304 13.9458 17.7304 19.8438 17.7279C20.5069 17.7279 20.7071 17.5211 20.7079 16.8637C20.7088 13.7831 20.7088 10.7033 20.7079 7.62277C20.7079 7.52486 20.6976 7.42612 20.6916 7.32821C20.3317 8.19162 20.0431 9.05671 19.7458 9.91843C19.3936 10.9422 18.7691 11.3895 17.6645 11.3988C16.6766 11.4072 15.6888 11.3996 14.7009 11.4022C14.5506 11.4022 14.4002 11.4174 14.2508 11.4258C14.2379 11.5482 14.2267 11.6174 14.2241 11.6874C14.1941 12.5424 14.0669 12.6673 13.214 12.6673C11.6823 12.6682 10.1499 12.6707 8.61827 12.6656C7.99034 12.6639 7.79621 12.469 7.77473 11.8622C7.77129 11.7254 7.76099 11.5887 7.74982 11.4013ZM1.58387 3.8307C1.60191 3.92016 1.60707 3.98768 1.62854 4.05014C2.25562 5.90186 2.88785 7.7519 3.50977 9.60531C3.64549 10.0096 3.93326 10.1353 4.33098 10.1336C5.31883 10.1294 6.30669 10.1336 7.29455 10.132C7.44573 10.132 7.59606 10.1176 7.7481 10.11C7.76013 9.97498 7.77129 9.89142 7.77387 9.80787C7.79878 9.01283 7.94395 8.86766 8.73768 8.86681C10.2839 8.86513 11.8301 8.86344 13.3763 8.8685C14.0051 8.87019 14.2018 9.06515 14.2224 9.66945C14.2276 9.80618 14.237 9.94291 14.2465 10.1083C15.5023 10.1083 16.729 10.1303 17.9539 10.0847C18.1412 10.0779 18.3963 9.78424 18.4805 9.57071C18.7863 8.79929 19.0337 8.00678 19.3009 7.22103C19.6797 6.10442 20.0551 4.98613 20.4451 3.83154C14.1365 3.8307 7.87266 3.8307 1.58387 3.8307ZM14.1597 2.50816C14.3246 1.70046 14.134 1.29028 13.5481 1.28352C11.8464 1.26411 10.1439 1.27171 8.44132 1.28099C8.03501 1.28268 7.80995 1.51394 7.7859 1.91399C7.77473 2.10473 7.78418 2.29632 7.78418 2.50816C9.94887 2.50816 12.0577 2.50816 14.1597 2.50816ZM12.891 11.3709C12.891 10.9489 12.891 10.5556 12.891 10.1699C11.6025 10.1699 10.3552 10.1699 9.10189 10.1699C9.10189 10.5886 9.10189 10.9726 9.10189 11.3709C10.3827 11.3709 11.6299 11.3709 12.891 11.3709Z" />
                  </svg>
                </div>
                <div className="crancy-uwork__content">
                  <h4 className="crancy-uwork__title">
                    Ui ux designer at{" "}
                    <span className="crancy-gcolor">Drobok</span>
                  </h4>
                  <p className="crancy-uwork__time crancy-gcolor">
                    2023 - Present
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Task Area --> */}
      <div className="crancy-taskarea mg-top-30">
        <h3 className="crancy-taskarea__title m-0">Task Progress</h3>
        <div className="row">
          {projects?.map(
            (task, index) =>
              index < 4 && <TaskCard task={task} key={index + "key"} />
          )}
        </div>
      </div>
      {/* <!-- End Task Area --> */}
    </div>
  );
}

export default Overview;