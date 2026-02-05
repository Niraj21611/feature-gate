"use client";

import { Player } from "@remotion/player";
import {
  DashboardAnimation,
  dashboardConfig,
} from "./remotion/DashboardAnimationNew";

export const DashboardPlayer = () => {
  return (
    <div className="relative w-full aspect-[520/420]">
      <Player
        component={DashboardAnimation}
        compositionWidth={dashboardConfig.width}
        compositionHeight={dashboardConfig.height}
        durationInFrames={dashboardConfig.durationInFrames}
        fps={dashboardConfig.fps}
        style={{
          width: "100%",
          height: "100%",
        }}
        loop
        autoPlay
        controls={false}
      />
    </div>
  );
};
