"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Ellip from "../../../../public/staticAssets/svgs/ellip.svg";
import { TeamCoLead, TeamLeadCard } from "@/components/TeamLeadCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";

import {
  AiMlTeamData,
  blockchainTeamData,
  socialMediaTeamData,
  eventTeamData,
  designTeamData,
  flutterTeamData,
  team405Data,
} from "../teamData";

const Domain = () => {
  const params = useParams();
  const domain = params?.domain;

  const teamDataSchema = {
    name: "",
    domain: "",
    teamLead: [],
    teamCoLead: null,
    teamMembers: [],
  };

  const [teamData, setTeamData] = useState(teamDataSchema);

  useEffect(() => {
    if (!domain) return;
  
    const domainMap = {
      "web": team405Data,
      "flutter": flutterTeamData,
      "ai-ml": AiMlTeamData,
      "blockchain": blockchainTeamData,
      "design": designTeamData,
      "event": eventTeamData,
      "socialmedia": socialMediaTeamData,
    };
  
    setTeamData(domainMap[domain] || teamDataSchema);
  }, [domain]);
  

  const translateProperties = [
    { translateX: ["-536px", "430px", "430px", "0px"] },
    { translateX: ["430px", "430px", "430px", "0px"] },
    { translateX: ["430px", "30px", "30px", "0px"] },
    { translateX: ["-536px", "-440px", "-440px", "0px"] },
    { translateX: ["430px", "-440px", "-440px", "0px"] },
    { translateX: ["-536px", "200px", "200px", "0px"] },
    { translateX: ["430px", "200px", "200px", "0px"] },
    { translateX: ["430px", "30px", "30px", "0px"] },
  ];

  return (
    <div className="w-screen relative">
      {/* Decorative Ellipse */}
      <Image
        alt="decorative ellipse"
        className="absolute lg:left-16 lg:top-48 sm:left-4 sm:top-20 left-[-20px] top-24 h-12 lg:h-24 aspect-square z-30"
        src={Ellip}
      />

      {/* Title */}
      <h1 className="text-white text-center lg:text-7xl sm:text-6xl text-4xl md:pt-10 py-6 mb-5">
        {teamData.name} ({teamData.domain})
      </h1>

      {/* ===================== TEAM LEADS ===================== */}
      <div className="w-full flex items-center flex-col gap-12 lg:px-10">
        {/* Multiple Team Leads Support */}
        {teamData.teamLead && (
          <div className="flex flex-wrap justify-center gap-10 w-full">
            {(Array.isArray(teamData.teamLead)
              ? teamData.teamLead
              : [teamData.teamLead]
            ).map((lead, index) => (
              <TeamLeadCard key={lead.id || index} teamLeadData={lead} />
            ))}
          </div>
        )}

        {/* Co Lead */}
        {teamData.teamCoLead && (
          <TeamCoLead teamCoLeadData={teamData.teamCoLead} />
        )}
      </div>

      {/* ===================== MEMBERS SECTION ===================== */}
      {teamData.teamMembers?.length > 0 && (
        <div className="py-10 w-full">
          <h1 className="md:mx-10 mx-4 text-white lg:text-5xl sm:text-6xl text-4xl mb-10">
            Members
          </h1>

          <div className="overflow-hidden">
            <motion.div
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center w-full 
                         lg:px-12 md:px-4 
                         lg:gap-x-10 md:gap-x-7 gap-x-4 gap-y-6"
            >
              {teamData.teamMembers.map((teamMember, index) => (
                <TeamMemberCard
                  key={teamMember.id}
                  translateProperty={
                    translateProperties[index % translateProperties.length]
                  }
                  index={index}
                  teamMemberData={teamMember}
                />
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Domain;
