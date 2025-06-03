/**
 * Enhanced Perseus Protocol Component
 * Epic Molecular Battle System for Konomi Phoenix
 */

class PerseusProtocolEnhanced {
    constructor(os) {
        this.os = os;
        this.brand = "Konomi Phoenix";
        this.battleData = {
            heroBindingAffinity: 0.3, // nM - Perseus
            villainALF: 39.930, // μM - Aluminum Monofluoride
            villainALF3: 45.031, // μM - Aluminum Trifluoride
            bbbPenetration: 95, // % Blood-Brain Barrier
            clearanceRate: 90, // % Demon clearance
            corruptionAmplification: 2.8, // x misfolding rate
            iqLossPerMg: 1.63 // IQ points per mg/L fluoride
        };
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="perseus-protocol-enhanced">
                ${this.renderEpicHeader()}
                ${this.renderAncientProphecy()}
                ${this.renderStoryChapters()}
                ${this.renderBattleStats()}
                ${this.renderModernMythAnalysis()}
                ${this.renderHeroJourney()}
            </div>
        `;

        this.attachEventListeners();
    }

    renderEpicHeader() {
        return `
            <div class="epic-header">
                <h1>⚔️ The Perseus Protocol</h1>
                <div class="epic-subtitle">An Epic Tale of Molecular Heroes & Villains in the Battle for Your Brain</div>
                <div class="phoenix-signature">
                    An Epic by ${this.brand} | <a href="https://konomi-phoenix.com">konomi-phoenix.com</a>
                </div>
            </div>
        `;
    }

    renderAncientProphecy() {
        return `
            <div class="mythology-section">
                <h2>🏛️ The Phoenix Prophecy</h2>
                <div class="prophecy-text">
                    "From the ashes of industrial hubris, where aluminum demons masquerade as healers, 
                    shall rise the Phoenix Perseus - bearer of phosphate light. Through molecular truth 
                    and binding precision, the shapeshifters shall be revealed and banished, 
                    restoring the neural kingdom to its rightful glory."
                </div>
                <p><strong>Phoenix Translation:</strong> This is the epic story of how toxic aluminum fluoride compounds (ALF/ALF₃) corrupt neural proteins, and how our Perseus Protocol can defeat them through superior molecular binding and clearance.</p>
            </div>
        `;
    }

    renderStoryChapters() {
        const chapters = [
            {
                number: "🏰",
                title: "The Neural Kingdom",
                content: "In the vast neural realm, protein citizens lived in perfect harmony. Tau architects maintained cellular highways while β-amyloid guardians protected borders. All was balanced until...",
                type: "peaceful"
            },
            {
                number: "👹", 
                title: "The Shapeshifting Invasion",
                content: "ALF and ALF₃ demons emerged from industrial wasteland, wearing phosphate masks to deceive the blood-brain barrier. These molecular antagonists infiltrated the sacred neural spaces.",
                type: "villain"
            },
            {
                number: "⚡",
                title: "The Corruption Spreads", 
                content: "The demons bind to noble proteins, corrupting tau (247% hyperphosphorylation) and creating toxic amyloid plaques. Prion-like cascades amplify misfolding 2.8x.",
                type: "corruption"
            },
            {
                number: "🔥",
                title: "Phoenix Perseus Awakens",
                content: "From molecular truth emerges our hero - Perseus with 100x superior binding affinity (0.3 nM vs 40 μM), 95% BBB penetration, and 90% demon clearance rate.",
                type: "hero"
            },
            {
                number: "⚔️",
                title: "The Epic Battle",
                content: "Perseus doesn't fight with sword and shield, but with molecular precision. Superior binding affinity ensures victory in every molecular competition against the ALF demons.",
                type: "battle"
            },
            {
                number: "👑",
                title: "Restoration of the Kingdom",
                content: "With demons bound and cleared, protein citizens return to proper folding. Neural pathways reopen, cognitive function restores, and the kingdom flourishes once more.",
                type: "victory"
            }
        ];

        return `
            <div class="story-chapters">
                ${chapters.map(chapter => `
                    <div class="story-card ${chapter.type}-card">
                        <div class="chapter-number ${chapter.type}-number">${chapter.number}</div>
                        <h3>${chapter.title}</h3>
                        <p>${chapter.content}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderBattleStats() {
        return `
            <div class="battle-stats-enhanced">
                <h2>⚔️ Phoenix Battle Analytics</h2>
                <div class="stats-grid">
                    <div class="stat-item hero-stat">
                        <div class="stat-number">${this.battleData.heroBindingAffinity}</div>
                        <div class="stat-label">nM Perseus Binding (Hero)</div>
                    </div>
                    <div class="stat-item villain-stat">
                        <div class="stat-number">${this.battleData.villainALF}</div>
                        <div class="stat-label">μM ALF Binding (Villain)</div>
                    </div>
                    <div class="stat-item hero-stat">
                        <div class="stat-number">${this.battleData.bbbPenetration}%</div>
                        <div class="stat-label">Blood-Brain Barrier Penetration</div>
                    </div>
                    <div class="stat-item hero-stat">
                        <div class="stat-number">${this.battleData.clearanceRate}%</div>
                        <div class="stat-label">Demon Clearance Success Rate</div>
                    </div>
                    <div class="stat-item villain-stat">
                        <div class="stat-number">${this.battleData.iqLossPerMg}</div>
                        <div class="stat-label">IQ Points Lost per mg/L</div>
                    </div>
                    <div class="stat-item villain-stat">
                        <div class="stat-number">${this.battleData.corruptionAmplification}x</div>
                        <div class="stat-label">Prion-like Amplification</div>
                    </div>
                </div>
            </div>
        `;
    }

    renderModernMythAnalysis() {
        return `
            <div class="modern-myth-section">
                <h2>🔥 The Phoenix STAR Analysis</h2>
                <div class="star-grid">
                    <div class="star-item">
                        <h3>📊 Situation</h3>
                        <p><strong>1940s Hubris:</strong> Scientists discovered fluoride's dental benefits but ignored long-term neural consequences. Like Icarus, they flew too close to the sun of simple solutions.</p>
                    </div>
                    <div class="star-item">
                        <h3>🎯 Task</h3>
                        <p><strong>Noble Quest:</strong> Save children's teeth and reduce dental inequality. A worthy goal that blinded heroes to the shapeshifting demons in their solution.</p>
                    </div>
                    <div class="star-item">
                        <h3>🛠️ Action</h3>
                        <p><strong>Mass Deployment:</strong> 73% of Americans now drink demon-corrupted water daily. Victory through mass infiltration, not dramatic conquest.</p>
                    </div>
                    <div class="star-item">
                        <h3>📈 Result</h3>
                        <p><strong>Pyrrhic Victory:</strong> Teeth saved, minds sacrificed. Each 1mg/L costs 1.63 IQ points - the price of ignoring shapeshifter nature.</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderHeroJourney() {
        return `
            <div class="hero-journey-section">
                <h2>🏛️ The Phoenix Hero's Journey</h2>
                <div class="journey-steps">
                    <div class="journey-step">
                        <div class="step-icon">🏰</div>
                        <h4>The Ordinary World</h4>
                        <p>Healthy brains with properly folded proteins in neural harmony</p>
                    </div>
                    <div class="journey-step">
                        <div class="step-icon">📢</div>
                        <h4>Call to Adventure</h4>
                        <p>ALF/ALF₃ demons begin systematic corruption of the neural kingdom</p>
                    </div>
                    <div class="journey-step">
                        <div class="step-icon">🔥</div>
                        <h4>Meeting the Phoenix</h4>
                        <p>Konomi Phoenix research reveals the molecular truth and battle strategy</p>
                    </div>
                    <div class="journey-step">
                        <div class="step-icon">🌊</div>
                        <h4>Crossing the Threshold</h4>
                        <p>Perseus Protocol enters bloodstream with 95% BBB penetration</p>
                    </div>
                    <div class="journey-step">
                        <div class="step-icon">⚔️</div>
                        <h4>Tests and Trials</h4>
                        <p>Molecular binding competitions, protein restoration battles</p>
                    </div>
                    <div class="journey-step">
                        <div class="step-icon">👑</div>
                        <h4>Return with Elixir</h4>
                        <p>Restored cognitive function and neural kingdom renaissance</p>
                    </div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        // Add interactive elements
        const battleButton = document.querySelector('.battle-activate-btn');
        if (battleButton) {
            battleButton.addEventListener('click', this.activateBattle.bind(this));
        }
    }

    activateBattle() {
        this.os.eventBus.dispatchEvent(new CustomEvent('perseus-protocol-activate', {
            detail: this.battleData
        }));
    }

    update(data) {
        Object.assign(this.battleData, data);
    }
}

export default PerseusProtocolEnhanced;