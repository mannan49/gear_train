import React from "react";
import Layout from "./Layout";
import "../Styles/Details.css";
import gif from "../assets/compound_gear_train.gif";
import planetary from "../assets/Planetary_Gear_Animation.gif";
import simple from "../assets/simple_gear_train.gif";
import reverted from "../assets/reverted_gear_train.gif";
import compound from "../assets/Compund Gear Train.gif";
import ring from "../assets/gear_train_ring.gif";

const Details = () => {
  return (
    <Layout>
      <h1 className="text-center text-3xl md:text-5xl font-bold my-5">
        What is Gear Train?
      </h1>
      <div className="details_container">
        <div className="details_container_nested px-5">
          <div className="details_child">
            <div className="details_child_content">
              <h2 className="text-2xl md:text-4xl font-bold my-5">Introduction:-</h2>
              <p>
                A gear train is a collection of gear wheels that transmit motion
                from one shaft to another. Ordinary gear trains consist of
                simple and compound gear trains. The epicyclic gear trains,
                which allow relative motion between gear axes, are the other
                types of gear trains. The gear trains are necessary when:-
                <ul className="px-5 li-disc">
                  <li>
                    A significant reduction in velocity or mechanical advantage
                    is desired.
                  </li>
                  <li>
                    Distance between two shafts is not excessively long but not
                    short enough to allow for the use of a single big gear.
                  </li>
                  <li>When a particular velocity ratio is desired</li>
                </ul>
              </p>
            </div>
            <div className="details_child_image">
              <img src={gif} alt="Image for gear Train" />
            </div>
          </div>
          <div className="details_child">
            <div className="details_child_content">
              <h2 className="text-2xl md:text-4xl font-bold my-5">
                Types of Gear Trains:-
              </h2>
              <p>
                Depending on how the wheels are arranged, there are several
                different types of gear trains. Below we have mentioned four
                types of gear trains where the axes of the shafts on which the
                gears are mounted are fixed relative to each other in the first
                three types of gear trains. Knowing the types of gear trains is
                helpful in designing gears as well. It is essential to know gear
                terminologies as well before going further. The axes of the
                shafts on which the gears are mounted may, however, move
                relative to a fixed axis in epicyclic gear trains. The types of
                gear trains are:
              </p>
              <ul className="px-5 li-disc text-2xl">
                <li>Simple gear train</li>
                <li>Compound gear train</li>
                <li>Reverted gear train</li>
                <li>Epicyclic gear train</li>
              </ul>
            </div>
            <div className="details_child_image">
              <img src={ring} alt="Image for Ring gear Train" />
            </div>
          </div>
          <div className="details_child">
            <div className="details_child_content">
              <h2 className="text-2xl md:text-4xl font-bold my-5">Simple Gear Trains:-</h2>
              <p>
                This is the simplest type of gear train for conveying motion
                from one shaft to the other, as the name implies. All of the
                gear axes stay locked in position with respect to the frame, and
                each gear is mounted on its own shaft, which is a distinct
                feature of this type of train. A simple gear train is one that
                has only one gear on each shaft, as shown in Figure. Pitch
                circles are used to depict the gears.
              </p>
            </div>
            <div className="details_child_image">

              <img src={simple} alt="Image for simple gear Train" />
            </div>
          </div>
          <div className="details_child">
            <div className="details_child_content">
              <h2 className="text-2xl md:text-4xl font-bold my-5">Compound Gear Train:-</h2>
              <p>
                A compound train of gears is when there are multiple gears on a
                shaft, as seen in Figure. In a simple train of gears, we know
                that idle gears have no effect on the system's speed ratio. On
                the other hand, these gears are useful for bridging the gap
                between the driver and the driven. When the distance between the
                driver and the driven or follower must be bridged by
                intermediate gears while still requiring a large (or much
                smaller) speed ratio, the advantage of intermediate gears is
                amplified by using compound gears on intermediate shafts. Each
                intermediate shaft has two gears rigidly attached to it in this
                scenario, allowing them to rotate at the same speed. As seen in
                Figure, one of these two gears meshes with the driver, while the
                other meshes with the driven or follower linked to the next
                shaft. The driving gear is positioned on shaft A in a compound
                train of gears, as shown in Figure, while the compound gears 2
                and 3 are mounted on shaft B. Gears 4 and 5 are compound gears
                that are mounted on shaft C, whereas gear 6 is the driven gear
                that is located on shaft D.
              </p>
            </div>
            <div className="details_child_image">
              <img src={compound} alt="Image for Compound gear Train" />

            </div>
          </div>
          <div className="details_child">
            <div className="details_child_content">
              <h2 className="text-2xl md:text-4xl font-bold my-5">Reverted Gear Train:-</h2>
              <p>
                A reversed gear train is one in which the first and last gear
                axes are co-axial, as seen in Figure.
                <br />
                Gear 1 appears to be driving gear 2 in the other direction.
                Because gears 2 and 3 are attached to the same shaft, they
                create a compound gear, which means that gear 3 rotates in the
                same direction as gear 2. The third gear pushes the fourth gear
                in the same direction as the first. As a result, we can see that
                the motion of the first and last gears are similar in a reversed
                gear train.
              </p>
            </div>
            <div className="details_child_image">
              <img src={reverted} alt="Image for Reverted gear Train" />
            </div>
          </div>
          <div className="details_child">
            <div className="details_child_content">
              <h2 className="text-2xl md:text-4xl font-bold my-5">
                Epicyclic Gear Train:-
              </h2>
              <p>
                The axes of the shafts over which the gears are mounted can move
                relative to a fixed axis in an epicyclic gear train. The figure
                shows a simple epicyclic gear train with a common axis at O1
                around which the gear A and the arm C can rotate. The gear B
                meshes with the gear A and rotates about its axis on the arm at
                O2. The gear train is simple if the arm is stationary, and gear
                A can drive gear B or vice versa; however, if the arm is fixed
                and rotated around the axis of gear A, the gear B is forced to
                spin on and around gear A. Epicyclic motion is defined as gear
                trains constructed in such a way that one or more of their
                members travel over and around another member. The epicyclic
                gear trains may be simple or compound.
              </p>
            </div>
            <div className="details_child_image">
              <img src={planetary} alt="Image for Planetary gear Train" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Details;
