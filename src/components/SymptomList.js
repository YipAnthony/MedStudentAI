import React from 'react'

export default function SymptomList(props) {
    let symptomsList = ["Abdominal guarding (s_1558)", "Abdominal mass (s_299)", "Abdominal mass, after pregnancy or the removal of molar pregnancy (s_1293)", "Abdominal pain (s_13)", "Abdominal pain, burning or gnawing (s_1802)", "Abdominal pain, colicky (s_1848)", "Abdominal pain, crampy (s_1860)", "Abdominal pain, diffuse (s_1557)", "Abdominal pain, epigastric (s_1387)", "Abdominal pain, exacerbating after caffeine consumption (s_1207)", "Abdominal pain, exacerbating during coughing or movement (s_15)", "Abdominal pain, exacerbating during deep breath (s_1202)", "Abdominal pain, exacerbating on an empty stomach (s_14)", "Abdominal pain, gradual onset (s_1844)", "Abdominal pain, lasting 2 to 7 days (s_1852)", "Abdominal pain, lasting 8 to 14 days (s_1853)", "Abdominal pain, lasting less than two days (s_1840)", "Abdominal pain, lasting more than two weeks (s_1842)", "Abdominal pain, left lower quadrant (s_1729)", "Abdominal pain, left side (s_1854)", "Abdominal pain, left upper quadrant (s_1591)", "Abdominal pain, migratory (s_1851)", "Abdominal pain, mild (s_1782)", "Abdominal pain, moderate (s_1783)", "Abdominal pain, pelvic (s_1598)", "Abdominal pain, periumbilical (s_1532)", "Abdominal pain, postprandial (s_16)", "Abdominal pain, premenstrual (s_17)", "Abdominal pain, radiating to left shoulder or shoulder blade (s_1845)", "Abdominal pain, radiating to lower or middle part of back (s_1846)", "Abdominal pain, radiating to right shoulder or shoulder blade (s_471)", "Abdominal pain, recurrent (s_1847)", "Abdominal pain, reduced by defecation or relieving flatulence (s_57)", "Abdominal pain, right lower quadrant (s_1531)", "Abdominal pain, right side (s_1855)", "Abdominal pain, right upper quadrant (s_1528)", "Abdominal pain, severe (s_1195)", "Abdominal pain, sharp and stabbing (s_1369)", "Abdominal pain, sudden onset (s_1843)", "Abdominal pain, unbearable (s_1929)", "Abdominal tenderness (s_1514)", "Abdominal tenderness, left upper quadrant (s_1589)", "Abdominal tenderness, right upper quadrant (s_1392)", "Abdominal tenderness, suprapubic (s_1400)", "Abnormal foveal avascular zone (s_1419)", "Abnormal vaginal discharge (s_328)", "Abscess (s_598)", "Absence of deep reflexes (s_1072)", "Achilles tendon hyperreflexia (s_1502)", "Acid reflux (s_2121)", "Active wound bleeding (s_1973)", "Activity related to sex despite negative consequences (s_3)", "Adenoid face (s_1111)", "Agitation (s_145)", "Agnosia (s_833)", "Agoraphobia (s_884)", "Agraphia (s_1012)", "Alcohol craving (s_817)", "Alcohol tolerance (s_588)", "Alcohol withdrawal syndrome (s_818)", "Allelomimetic behavior, allomimetic behavior (s_1019)", "Allen-Cleckley sign (s_1272)", "Alogia (s_837)", "Altered defecation rhythm (s_1728)", "Amenorrhea (s_1457)", "Amenorrhea, primary (s_1458)", "Amenorrhea, secondary, for at least 12 months (s_1370)", "Amusia (s_1032)", "Anemia (s_147)", "Angular cheilitis (s_608)", "Anhedonia (s_508)", "Anhidrosis (s_1123)", "Anhidrosis, face, unilateral (s_669)", "Anisocoria (s_497)", "Annular skin lesions (s_1647)", "Anomic aphasia (s_1030)", "Anorectal pain (s_436)", "Anxiety (s_120)", "Anxiety attack (s_582)", "Apathy (s_4)", "Aphasia (s_969)", "Aphonia (s_477)", "Aponeurotic reflex (s_1269)", "Appetite for salty foods (s_6)", "Apraxia (s_1010)", "Arthropathy (s_1292)", "Ascites (s_1116)", "Asymmetry of a skin mole or birthmark (s_380)", "Ataxia (s_651)", "Atonic bladder (s_1120)", "Atrophy or diminishing of both testicles (s_1117)", "Auditory verbal agnosia (s_1028)", "Auscultative fine crackles over the thorax (s_857)", "Auscultative rhonchi over the thorax (s_1316)", "Auscultative wheezes over the thorax (s_856)", "Avoiding actions, places, or people that bring back memories of trauma (s_710)", "Avoiding eating and drinking in public (s_718)", "Avoiding eating in someone's presence (s_719)", "Avoiding public appearances (s_717)", "Avoiding talking to authority figures (s_720)"]
    // console.log(symptomsList)
    symptomsList = symptomsList.filter(element => {
        let search = props.ChiefComplaintInput.toLowerCase();
        element = element.toLowerCase();
        return element.includes(search);
    })
    
   
    return (
        <div>
            {symptomsList.map((element) => {
            return (
                <span className="dropdown-item" key={element} onClick={props.selectSymptom}>
                    {element}
                </span>)
            })}
        </div>
    )
 }
    

