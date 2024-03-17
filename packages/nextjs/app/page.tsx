"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/355/original/777.PNG?1710612550"
              width="500"
              alt="0x Faery"
              className="mx-auto mt-5"
            />
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Magic Address:</p>
            <Address address={connectedAddress} />
          </div>

          <button className="faeryButton">Enter portal here</button>

          <p className="faerytext">
            <br />
            Enter the portal of infinite possibility, crossing the threshold of illusion and surrender to the Will of
            the Good People.
            <br />
            <br /> Delightfully tricksty, colorful and strange, they wait for you to join their dreamy dance across the
            spheres. May the divide touch of freedom bring brilliance to your movement and courage to your truths.{" "}
            <br />
            <br />
          </p>
        </div>

        <div className="flex-grow bg-white w-full mt-1 px-1 py-0.5">
          <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/357/original/photo_6028373130269017091_x.jpg?1710614060"
                  width="700"
                  alt="0x Faery2"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/356/original/photo_6028373130269017090_x.jpg?1710614054"
                  width="700"
                  alt="0x Faery1"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/359/original/photo_6028373130269017099_x.jpg?1710614071"
                  width="700"
                  alt="0x Faery4"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/360/original/photo_6028373130269017100_x_%281%29.jpg?1710614077"
                  width="700"
                  alt="0x Faery5"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/361/original/photo_6028373130269017102_y.jpg?1710614083"
                  width="700"
                  alt="0x Faery6"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/362/original/photo_6028373130269017103_y.jpg?1710614091"
                  width="700"
                  alt="0x Faery7"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
            <div className="nft.fairies">
              <p>
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/119/358/original/photo_6028373130269017092_y.jpg?1710614066"
                  width="700"
                  alt="0x Faery3"
                  className="mx-auto mt-5"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
