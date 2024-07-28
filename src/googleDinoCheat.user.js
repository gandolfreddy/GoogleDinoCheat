// ==UserScript==
// @name         Google dino Cheat
// @namespace    http://tampermonkey.net/
// @version      2024-07-26
// @description  Play google dino game with cheat script.
// @author       Gandolfreddy
// @match        https://chromedino.com/
// @icon         https://seeklogo.com/images/D/dinosaur-game-logo-2723F385F0-seeklogo.com.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Dino AI
     */
    function dinoAI() {
        if (Runner.instance_.horizon.obstacles.length > 0) {
            let dist = Runner.instance_.horizon.obstacles[0].xPos;
            let obj = Runner.instance_.horizon.obstacles[0];
            let type = obj.typeConfig.type;
            let speed = Runner.instance_.currentSpeed;
            if (dist < speed * 22) {
                if (type === 'PTERODACTYL' && obj.yPos < 60) {
                    if (!Runner.instance_.tRex.ducking) Runner.instance_.tRex.setDuck(true);
                } else {
                    if (Runner.instance_.tRex.ducking) Runner.instance_.tRex.setDuck(false);
                    Runner.instance_.tRex.startJump(Runner.instance_.currentSpeed);
                }
            }
        }
        requestAnimationFrame(dinoAI);
    }

    dinoAI();
})();