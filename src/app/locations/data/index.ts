// src/app/locations/data/index.ts

import { StateData, CityData, CityDynamicData, CityStaticConfig, StateDynamicData, StateStaticConfig, PlaceholderReplacer } from './types';
import { CITY_STATIC_CONFIG } from './static/city-static-config';
import { STATE_STATIC_CONFIG } from './static/state-static-config';

// Import new dynamic state data
import { alabamaDynamicData } from './states/alabama';
import { alaskaDynamicData } from './states/alaska';
import { arizonaDynamicData } from './states/arizona';
import { arkansasDynamicData } from './states/arkansas';
import { californiaDynamicData } from './states/california';
import { coloradoDynamicData } from './states/colorado';
import { connecticutDynamicData } from './states/connecticut';
import { delawareDynamicData } from './states/delaware';
import { floridaDynamicData } from './states/florida';
import { georgiaDynamicData } from './states/georgia';
import { hawaiiDynamicData } from './states/hawaii';
import { idahoDynamicData } from './states/idaho';
import { illinoisDynamicData } from './states/illinois';
import { indianaDynamicData } from './states/indiana';
import { iowaDynamicData } from './states/iowa';
import { kansasDynamicData } from './states/kansas';
import { kentuckyDynamicData } from './states/kentucky';
import { louisianaDynamicData } from './states/louisiana';
import { maineDynamicData } from './states/maine';
import { marylandDynamicData } from './states/maryland';
import { massachusettsDynamicData } from './states/massachusetts';
import { michiganDynamicData } from './states/michigan';
import { minnesotaDynamicData } from './states/minnesota';
import { mississippiDynamicData } from './states/mississippi';
import { missouriDynamicData } from './states/missouri';
import { montanaDynamicData } from './states/montana';
import { nebraskaDynamicData } from './states/nebraska';
import { nevadaDynamicData } from './states/nevada';
import { newhampshireDynamicData } from './states/new-hampshire';
import { newjerseyDynamicData } from './states/new-jersey';
import { newmexicoDynamicData } from './states/new-mexico';
import { newyorkDynamicData } from './states/new-york';
import { northcarolinaDynamicData } from './states/north-carolina';
import { northdakotaDynamicData } from './states/north-dakota';
import { ohioDynamicData } from './states/ohio';
import { oklahomaDynamicData } from './states/oklahoma';
import { oregonDynamicData } from './states/oregon';
import { pennsylvaniaDynamicData } from './states/pennsylvania';
import { rhodeislandDynamicData } from './states/rhode-island';
import { southcarolinaDynamicData } from './states/south-carolina';
import { southdakotaDynamicData } from './states/south-dakota';
import { tennesseeDynamicData } from './states/tennessee';
import { texasDynamicData } from './states/texas';
import { utahDynamicData } from './states/utah';
import { vermontDynamicData } from './states/vermont';
import { virginiaDynamicData } from './states/virginia';
import { washingtonDynamicData } from './states/washington';
import { west_virginiaDynamicData } from './states/west-virginia';
import { wisconsinDynamicData } from './states/wisconsin';
import { wyomingDynamicData } from './states/wyoming';


// Import new dynamic city data
import { alexandercity_al_DynamicData } from './cities/alabama/alexander-city';
import { andalusia_al_DynamicData } from './cities/alabama/andalusia';
import { anniston_al_DynamicData } from './cities/alabama/anniston';
import { athens_al_DynamicData } from './cities/alabama/athens';
import { atmore_al_DynamicData } from './cities/alabama/atmore';
import { auburn_al_DynamicData } from './cities/alabama/auburn';
import { bessemer_al_DynamicData } from './cities/alabama/bessemer';
import { birmingham_al_DynamicData } from './cities/alabama/birmingham';
import { chickasaw_al_DynamicData } from './cities/alabama/chickasaw';
import { clanton_al_DynamicData } from './cities/alabama/clanton';
import { cullman_al_DynamicData } from './cities/alabama/cullman';
import { decatur_al_DynamicData } from './cities/alabama/decatur';
import { demopolis_al_DynamicData } from './cities/alabama/demopolis';
import { dothan_al_DynamicData } from './cities/alabama/dothan';
import { enterprise_al_DynamicData } from './cities/alabama/enterprise';
import { eufaula_al_DynamicData } from './cities/alabama/eufaula';
import { florence_al_DynamicData } from './cities/alabama/florence';
import { fort_payne_al_DynamicData } from './cities/alabama/fort-payne';
import { gadsden_al_DynamicData } from './cities/alabama/gadsden';
import { greenville_al_DynamicData } from './cities/alabama/greenville';
import { guntersville_al_DynamicData } from './cities/alabama/guntersville';
import { huntsville_al_DynamicData } from './cities/alabama/huntsville';
import { jasper_al_DynamicData } from './cities/alabama/jasper';
import { marion_al_DynamicData } from './cities/alabama/marion';
import { mobile_al_DynamicData } from './cities/alabama/mobile';
import { montgomery_al_DynamicData } from './cities/alabama/montgomery';
import { opelika_al_DynamicData } from './cities/alabama/opelika';
import { ozark_al_DynamicData } from './cities/alabama/ozark';
import { phenix_city_al_DynamicData } from './cities/alabama/phenix-city';
import { prichard_al_DynamicData } from './cities/alabama/prichard';
import { scottsboro_al_DynamicData } from './cities/alabama/scottsboro';
import { selma_al_DynamicData } from './cities/alabama/selma';
import { sheffield_al_DynamicData } from './cities/alabama/sheffield';
import { sylacauga_al_DynamicData } from './cities/alabama/sylacauga';
import { talladega_al_DynamicData } from './cities/alabama/talladega';
import { troy_al_DynamicData } from './cities/alabama/troy';
import { tuscaloosa_al_DynamicData } from './cities/alabama/tuscaloosa';
import { tuscumbia_al_DynamicData } from './cities/alabama/tuscumbia';
import { tuskegee_al_DynamicData } from './cities/alabama/tuskegee';
import { anchorage_ak_DynamicData } from './cities/alaska/anchorage';
import { cordova_ak_DynamicData } from './cities/alaska/cordova';
import { fairbanks_ak_DynamicData } from './cities/alaska/fairbanks';
import { haines_ak_DynamicData } from './cities/alaska/haines';
import { homer_ak_DynamicData } from './cities/alaska/homer';
import { juneau_ak_DynamicData } from './cities/alaska/juneau';
import { ketchikan_ak_DynamicData } from './cities/alaska/ketchikan';
import { kodiak_ak_DynamicData } from './cities/alaska/kodiak';
import { kotzebue_ak_DynamicData } from './cities/alaska/kotzebue';
import { nome_ak_DynamicData } from './cities/alaska/nome';
import { palmer_ak_DynamicData } from './cities/alaska/palmer';
import { seward_ak_DynamicData } from './cities/alaska/seward';
import { sitka_ak_DynamicData } from './cities/alaska/sitka';
import { skagway_ak_DynamicData } from './cities/alaska/skagway';
import { valdez_ak_DynamicData } from './cities/alaska/valdez';
import { ajo_az_DynamicData } from './cities/arizona/ajo';
import { avondale_az_DynamicData } from './cities/arizona/avondale';
import { bisbee_az_DynamicData } from './cities/arizona/bisbee';
import { casa_grande_az_DynamicData } from './cities/arizona/casa-grande';
import { chandler_az_DynamicData } from './cities/arizona/chandler';
import { clifton_az_DynamicData } from './cities/arizona/clifton';
import { douglas_az_DynamicData } from './cities/arizona/douglas';
import { flagstaff_az_DynamicData } from './cities/arizona/flagstaff';
import { florence_az_DynamicData } from './cities/arizona/florence';
import { gila_bend_az_DynamicData } from './cities/arizona/gila-bend';
import { glendale_az_DynamicData } from './cities/arizona/glendale';
import { globe_az_DynamicData } from './cities/arizona/globe';
import { kingman_az_DynamicData } from './cities/arizona/kingman';
import { lake_havasu_city_az_DynamicData } from './cities/arizona/lake-havasu-city';
import { mesa_az_DynamicData } from './cities/arizona/mesa';
import { nogales_az_DynamicData } from './cities/arizona/nogales';
import { oraibi_az_DynamicData } from './cities/arizona/oraibi';
import { phoenix_az_DynamicData } from './cities/arizona/phoenix';
import { prescott_az_DynamicData } from './cities/arizona/prescott';
import { scottsdale_az_DynamicData } from './cities/arizona/scottsdale';
import { sierra_vista_az_DynamicData } from './cities/arizona/sierra-vista';
import { tempe_az_DynamicData } from './cities/arizona/tempe';
import { tombstone_az_DynamicData } from './cities/arizona/tombstone';
import { tucson_az_DynamicData } from './cities/arizona/tucson';
import { walpi_az_DynamicData } from './cities/arizona/walpi';
import { window_rock_az_DynamicData } from './cities/arizona/window-rock';
import { winslow_az_DynamicData } from './cities/arizona/winslow';
import { yuma_az_DynamicData } from './cities/arizona/yuma';
import { arkadelphia_ar_DynamicData } from './cities/arkansas/arkadelphia';
import { arkansas_post_ar_DynamicData } from './cities/arkansas/arkansas-post';
import { batesville_ar_DynamicData } from './cities/arkansas/batesville';
import { benton_ar_DynamicData } from './cities/arkansas/benton';
import { blytheville_ar_DynamicData } from './cities/arkansas/blytheville';
import { camden_ar_DynamicData } from './cities/arkansas/camden';
import { conway_ar_DynamicData } from './cities/arkansas/conway';
import { crossett_ar_DynamicData } from './cities/arkansas/crossett';
import { el_dorado_ar_DynamicData } from './cities/arkansas/el-dorado';
import { fayetteville_ar_DynamicData } from './cities/arkansas/fayetteville';
import { forrest_city_ar_DynamicData } from './cities/arkansas/forrest-city';
import { fort_smith_ar_DynamicData } from './cities/arkansas/fort-smith';
import { harrison_ar_DynamicData } from './cities/arkansas/harrison';
import { helena_ar_DynamicData } from './cities/arkansas/helena';
import { hope_ar_DynamicData } from './cities/arkansas/hope';
import { hot_springs_ar_DynamicData } from './cities/arkansas/hot-springs';
import { jacksonville_ar_DynamicData } from './cities/arkansas/jacksonville';
import { jonesboro_ar_DynamicData } from './cities/arkansas/jonesboro';
import { little_rock_ar_DynamicData } from './cities/arkansas/little-rock';
import { magnolia_ar_DynamicData } from './cities/arkansas/magnolia';
import { morrilton_ar_DynamicData } from './cities/arkansas/morrilton';
import { newport_ar_DynamicData } from './cities/arkansas/newport';
import { north_little_rock_ar_DynamicData } from './cities/arkansas/north-little-rock';
import { osceola_ar_DynamicData } from './cities/arkansas/osceola';
import { pine_bluff_ar_DynamicData } from './cities/arkansas/pine-bluff';
import { rogers_ar_DynamicData } from './cities/arkansas/rogers';
import { searcy_ar_DynamicData } from './cities/arkansas/searcy';
import { stuttgart_ar_DynamicData } from './cities/arkansas/stuttgart';
import { vanburen_ar_DynamicData } from './cities/arkansas/van-buren';
import { west_memphis_ar_DynamicData } from './cities/arkansas/west-memphis';
import { alameda_ca_DynamicData } from './cities/california/alameda';
import { alhambra_ca_DynamicData } from './cities/california/alhambra';
import { anaheim_ca_DynamicData } from './cities/california/anaheim';
import { antioch_ca_DynamicData } from './cities/california/antioch';
import { arcadia_ca_DynamicData } from './cities/california/arcadia';
import { bakersfield_ca_DynamicData } from './cities/california/bakersfield';
import { barstow_ca_DynamicData } from './cities/california/barstow';
import { belmont_ca_DynamicData } from './cities/california/belmont';
import { berkeley_ca_DynamicData } from './cities/california/berkeley';
import { beverly_hills_ca_DynamicData } from './cities/california/beverly-hills';
import { brea_ca_DynamicData } from './cities/california/brea';
import { buena_park_ca_DynamicData } from './cities/california/buena-park';
import { burbank_ca_DynamicData } from './cities/california/burbank';
import { calexico_ca_DynamicData } from './cities/california/calexico';
import { calistoga_ca_DynamicData } from './cities/california/calistoga';
import { carlsbad_ca_DynamicData } from './cities/california/carlsbad';
import { carmel_ca_DynamicData } from './cities/california/carmel';
import { chico_ca_DynamicData } from './cities/california/chico';
import { chulavista_ca_DynamicData } from './cities/california/chula-vista';
import { claremont_ca_DynamicData } from './cities/california/claremont';
import { compton_ca_DynamicData } from './cities/california/compton';
import { concord_ca_DynamicData } from './cities/california/concord';
import { corona_ca_DynamicData } from './cities/california/corona';
import { coronado_ca_DynamicData } from './cities/california/coronado';
import { costa_mesa_ca_DynamicData } from './cities/california/costa-mesa';
import { culver_city_ca_DynamicData } from './cities/california/culver-city';
import { daly_city_ca_DynamicData } from './cities/california/daly-city';
import { davis_ca_DynamicData } from './cities/california/davis';
import { downey_ca_DynamicData } from './cities/california/downey';
import { el_centro_ca_DynamicData } from './cities/california/el-centro';
import { el_cerrito_ca_DynamicData } from './cities/california/el-cerrito';
import { el_monte_ca_DynamicData } from './cities/california/el-monte';
import { escondido_ca_DynamicData } from './cities/california/escondido';
import { eureka_ca_DynamicData } from './cities/california/eureka';
import { fairfield_ca_DynamicData } from './cities/california/fairfield';
import { fontana_ca_DynamicData } from './cities/california/fontana';
import { fremont_ca_DynamicData } from './cities/california/fremont';
import { fresno_ca_DynamicData } from './cities/california/fresno';
import { fullerton_ca_DynamicData } from './cities/california/fullerton';
import { garden_grove_ca_DynamicData } from './cities/california/garden-grove';
import { glendale_ca_DynamicData } from './cities/california/glendale';
import { hayward_ca_DynamicData } from './cities/california/hayward';
import { hollywood_ca_DynamicData } from './cities/california/hollywood';
import { huntington_beach_ca_DynamicData } from './cities/california/huntington-beach';
import { indio_ca_DynamicData } from './cities/california/indio';
import { inglewood_ca_DynamicData } from './cities/california/inglewood';
import { irvine_ca_DynamicData } from './cities/california/irvine';
import { la_habra_ca_DynamicData } from './cities/california/la-habra';
import { laguna_beach_ca_DynamicData } from './cities/california/laguna-beach';
import { lancaster_ca_DynamicData } from './cities/california/lancaster';
import { livermore_ca_DynamicData } from './cities/california/livermore';
import { lodi_ca_DynamicData } from './cities/california/lodi';
import { lompoc_ca_DynamicData } from './cities/california/lompoc';
import { long_beach_ca_DynamicData } from './cities/california/long-beach';
import { los_angeles_ca_DynamicData } from './cities/california/los-angeles';
import { malibu_ca_DynamicData } from './cities/california/malibu';
import { martinez_ca_DynamicData } from './cities/california/martinez';
import { marysville_ca_DynamicData } from './cities/california/marysville';
import { menlo_park_ca_DynamicData } from './cities/california/menlo-park';
import { merced_ca_DynamicData } from './cities/california/merced';
import { modesto_ca_DynamicData } from './cities/california/modesto';
import { monterey_ca_DynamicData } from './cities/california/monterey';
import { mountain_view_ca_DynamicData } from './cities/california/mountain-view';
import { napa_ca_DynamicData } from './cities/california/napa';
import { needles_ca_DynamicData } from './cities/california/needles';
import { newport_beach_ca_DynamicData } from './cities/california/newport-beach';
import { norwalk_ca_DynamicData } from './cities/california/norwalk';
import { novato_ca_DynamicData } from './cities/california/novato';
import { oakland_ca_DynamicData } from './cities/california/oakland';
import { oceanside_ca_DynamicData } from './cities/california/oceanside';
import { ojai_ca_DynamicData } from './cities/california/ojai';
import { ontario_ca_DynamicData } from './cities/california/ontario';
import { orange_ca_DynamicData } from './cities/california/orange';
import { oroville_ca_DynamicData } from './cities/california/oroville';
import { oxnard_ca_DynamicData } from './cities/california/oxnard';
import { pacific_grove_ca_DynamicData } from './cities/california/pacific-grove';
import { palm_springs_ca_DynamicData } from './cities/california/palm-springs';
import { palmdale_ca_DynamicData } from './cities/california/palmdale';
import { palo_alto_ca_DynamicData } from './cities/california/palo-alto';
import { pasadena_ca_DynamicData } from './cities/california/pasadena';
import { petaluma_ca_DynamicData } from './cities/california/petaluma';
import { pomona_ca_DynamicData } from './cities/california/pomona';
import { port_hueneme_ca_DynamicData } from './cities/california/port-hueneme';
import { rancho_cucamonga_ca_DynamicData } from './cities/california/rancho-cucamonga';
import { red_bluff_ca_DynamicData } from './cities/california/red-bluff';
import { redding_ca_DynamicData } from './cities/california/redding';
import { redlands_ca_DynamicData } from './cities/california/redlands';
import { redondo_beach_ca_DynamicData } from './cities/california/redondo-beach';
import { redwood_city_ca_DynamicData } from './cities/california/redwood-city';
import { richmond_ca_DynamicData } from './cities/california/richmond';
import { riverside_ca_DynamicData } from './cities/california/riverside';
import { roseville_ca_DynamicData } from './cities/california/roseville';
import { sacramento_ca_DynamicData } from './cities/california/sacramento';
import { salinas_ca_DynamicData } from './cities/california/salinas';
import { san_bernardino_ca_DynamicData } from './cities/california/san-bernardino';
import { san_clemente_ca_DynamicData } from './cities/california/san-clemente';
import { san_diego_ca_DynamicData } from './cities/california/san-diego';
import { san_fernando_ca_DynamicData } from './cities/california/san-fernando';
import { san_francisco_ca_DynamicData } from './cities/california/san-francisco';
import { san_gabriel_ca_DynamicData } from './cities/california/san-gabriel';
import { san_jose_ca_DynamicData } from './cities/california/san-jose';
import { san_juan_capistrano_ca_DynamicData } from './cities/california/san-juan-capistrano';
import { san_leandro_ca_DynamicData } from './cities/california/san-leandro';
import { san_luis_obispo_ca_DynamicData } from './cities/california/san-luis-obispo';
import { san_marino_ca_DynamicData } from './cities/california/san-marino';
import { san_mateo_ca_DynamicData } from './cities/california/san-mateo';
import { san_pedro_ca_DynamicData } from './cities/california/san-pedro';
import { san_rafael_ca_DynamicData } from './cities/california/san-rafael';
import { san_simeon_ca_DynamicData } from './cities/california/san-simeon';
import { santa_ana_ca_DynamicData } from './cities/california/santa-ana';
import { santa_barbara_ca_DynamicData } from './cities/california/santa-barbara';
import { santa_clara_ca_DynamicData } from './cities/california/santa-clara';
import { santa_clarita_ca_DynamicData } from './cities/california/santa-clarita';
import { santa_cruz_ca_DynamicData } from './cities/california/santa-cruz';
import { santa_monica_ca_DynamicData } from './cities/california/santa-monica';
import { santa_rosa_ca_DynamicData } from './cities/california/santa-rosa';
import { sausalito_ca_DynamicData } from './cities/california/sausalito';
import { simi_valley_ca_DynamicData } from './cities/california/simi-valley';
import { sonoma_ca_DynamicData } from './cities/california/sonoma';
import { south_san_francisco_ca_DynamicData } from './cities/california/south-san-francisco';
import { stockton_ca_DynamicData } from './cities/california/stockton';
import { sunnyvale_ca_DynamicData } from './cities/california/sunnyvale';
import { susanville_ca_DynamicData } from './cities/california/susanville';
import { thousand_oaks_ca_DynamicData } from './cities/california/thousand-oaks';
import { torrance_ca_DynamicData } from './cities/california/torrance';
import { turlock_ca_DynamicData } from './cities/california/turlock';
import { ukiah_ca_DynamicData } from './cities/california/ukiah';
import { vallejo_ca_DynamicData } from './cities/california/vallejo';
import { ventura_ca_DynamicData } from './cities/california/ventura';
import { victorville_ca_DynamicData } from './cities/california/victorville';
import { visalia_ca_DynamicData } from './cities/california/visalia';
import { walnut_creek_ca_DynamicData } from './cities/california/walnut-creek';
import { watts_ca_DynamicData } from './cities/california/watts';
import { west_covina_ca_DynamicData } from './cities/california/west-covina';
import { whittier_ca_DynamicData } from './cities/california/whittier';
import { woodland_ca_DynamicData } from './cities/california/woodland';
import { yorba_linda_ca_DynamicData } from './cities/california/yorba-linda';
import { yuba_city_ca_DynamicData } from './cities/california/yuba-city';
import { alamosa_co_DynamicData } from './cities/colorado/alamosa';
import { aspen_co_DynamicData } from './cities/colorado/aspen';
import { aurora_co_DynamicData } from './cities/colorado/aurora';
import { boulder_co_DynamicData } from './cities/colorado/boulder';
import { breckenridge_co_DynamicData } from './cities/colorado/breckenridge';
import { brighton_co_DynamicData } from './cities/colorado/brighton';
import { canon_city_co_DynamicData } from './cities/colorado/canon-city';
import { central_city_co_DynamicData } from './cities/colorado/central-city';
import { climax_co_DynamicData } from './cities/colorado/climax';
import { colorado_springs_co_DynamicData } from './cities/colorado/colorado-springs';
import { cortez_co_DynamicData } from './cities/colorado/cortez';
import { cripple_creek_co_DynamicData } from './cities/colorado/cripple-creek';
import { denver_co_DynamicData } from './cities/colorado/denver';
import { durango_co_DynamicData } from './cities/colorado/durango';
import { englewood_co_DynamicData } from './cities/colorado/englewood';
import { estes_park_co_DynamicData } from './cities/colorado/estes-park';
import { fort_collins_co_DynamicData } from './cities/colorado/fort-collins';
import { fort_morgan_co_DynamicData } from './cities/colorado/fort-morgan';
import { georgetown_co_DynamicData } from './cities/colorado/georgetown';
import { glenwood_springs_co_DynamicData } from './cities/colorado/glenwood-springs';
import { golden_co_DynamicData } from './cities/colorado/golden';
import { grand_junction_co_DynamicData } from './cities/colorado/grand-junction';
import { greeley_co_DynamicData } from './cities/colorado/greeley';
import { gunnison_co_DynamicData } from './cities/colorado/gunnison';
import { la_junta_co_DynamicData } from './cities/colorado/la-junta';
import { leadville_co_DynamicData } from './cities/colorado/leadville';
import { littleton_co_DynamicData } from './cities/colorado/littleton';
import { longmont_co_DynamicData } from './cities/colorado/longmont';
import { loveland_co_DynamicData } from './cities/colorado/loveland';
import { montrose_co_DynamicData } from './cities/colorado/montrose';
import { ouray_co_DynamicData } from './cities/colorado/ouray';
import { pagosa_springs_co_DynamicData } from './cities/colorado/pagosa-springs';
import { pueblo_co_DynamicData } from './cities/colorado/pueblo';
import { silverton_co_DynamicData } from './cities/colorado/silverton';
import { steamboat_springs_co_DynamicData } from './cities/colorado/steamboat-springs';
import { sterling_co_DynamicData } from './cities/colorado/sterling';
import { telluride_co_DynamicData } from './cities/colorado/telluride';
import { trinidad_co_DynamicData } from './cities/colorado/trinidad';
import { vail_co_DynamicData } from './cities/colorado/vail';
import { walsenburg_co_DynamicData } from './cities/colorado/walsenburg';
import { westminster_co_DynamicData } from './cities/colorado/westminster';
import { ansonia_ct_DynamicData } from './cities/connecticut/ansonia';
import { berlin_ct_DynamicData } from './cities/connecticut/berlin';
import { bloomfield_ct_DynamicData } from './cities/connecticut/bloomfield';
import { branford_ct_DynamicData } from './cities/connecticut/branford';
import { bridgeport_ct_DynamicData } from './cities/connecticut/bridgeport';
import { bristol_ct_DynamicData } from './cities/connecticut/bristol';
import { coventry_ct_DynamicData } from './cities/connecticut/coventry';
import { danbury_ct_DynamicData } from './cities/connecticut/danbury';
import { darien_ct_DynamicData } from './cities/connecticut/darien';
import { derby_ct_DynamicData } from './cities/connecticut/derby';
import { east_hartford_ct_DynamicData } from './cities/connecticut/east-hartford';
import { east_haven_ct_DynamicData } from './cities/connecticut/east-haven';
import { enfield_ct_DynamicData } from './cities/connecticut/enfield';
import { fairfield_ct_DynamicData } from './cities/connecticut/fairfield';
import { farmington_ct_DynamicData } from './cities/connecticut/farmington';
import { greenwich_ct_DynamicData } from './cities/connecticut/greenwich';
import { groton_ct_DynamicData } from './cities/connecticut/groton';
import { guilford_ct_DynamicData } from './cities/connecticut/guilford';
import { hamden_ct_DynamicData } from './cities/connecticut/hamden';
import { hartford_ct_DynamicData } from './cities/connecticut/hartford';
import { lebanon_ct_DynamicData } from './cities/connecticut/lebanon';
import { litchfield_ct_DynamicData } from './cities/connecticut/litchfield';
import { manchester_ct_DynamicData } from './cities/connecticut/manchester';
import { mansfield_ct_DynamicData } from './cities/connecticut/mansfield';
import { meriden_ct_DynamicData } from './cities/connecticut/meriden';
import { middletown_ct_DynamicData } from './cities/connecticut/middletown';
import { milford_ct_DynamicData } from './cities/connecticut/milford';
import { mystic_ct_DynamicData } from './cities/connecticut/mystic';
import { naugatuck_ct_DynamicData } from './cities/connecticut/naugatuck';
import { new_britain_ct_DynamicData } from './cities/connecticut/new-britain';
import { new_haven_ct_DynamicData } from './cities/connecticut/new-haven';
import { new_london_ct_DynamicData } from './cities/connecticut/new-london';
import { north_haven_ct_DynamicData } from './cities/connecticut/north-haven';
import { norwalk_ct_DynamicData } from './cities/connecticut/norwalk';
import { norwich_ct_DynamicData } from './cities/connecticut/norwich';
import { old_saybrook_ct_DynamicData } from './cities/connecticut/old-saybrook';
import { orange_ct_DynamicData } from './cities/connecticut/orange';
import { seymour_ct_DynamicData } from './cities/connecticut/seymour';
import { shelton_ct_DynamicData } from './cities/connecticut/shelton';
import { simsbury_ct_DynamicData } from './cities/connecticut/simsbury';
import { southington_ct_DynamicData } from './cities/connecticut/southington';
import { stamford_ct_DynamicData } from './cities/connecticut/stamford';
import { stonington_ct_DynamicData } from './cities/connecticut/stonington';
import { stratford_ct_DynamicData } from './cities/connecticut/stratford';
import { torrington_ct_DynamicData } from './cities/connecticut/torrington';
import { wallingford_ct_DynamicData } from './cities/connecticut/wallingford';
import { waterbury_ct_DynamicData } from './cities/connecticut/waterbury';
import { waterford_ct_DynamicData } from './cities/connecticut/waterford';
import { watertown_ct_DynamicData } from './cities/connecticut/watertown';
import { west_hartford_ct_DynamicData } from './cities/connecticut/west-hartford';
import { west_haven_ct_DynamicData } from './cities/connecticut/west-haven';
import { westport_ct_DynamicData } from './cities/connecticut/westport';
import { wethersfield_ct_DynamicData } from './cities/connecticut/wethersfield';
import { willimantic_ct_DynamicData } from './cities/connecticut/willimantic';
import { windham_ct_DynamicData } from './cities/connecticut/windham';
import { windsorlocks_ct_DynamicData } from './cities/connecticut/windsor-locks';
import { windsor_ct_DynamicData } from './cities/connecticut/windsor';
import { winsted_ct_DynamicData } from './cities/connecticut/winsted';
import { dover_de_DynamicData } from './cities/delaware/dover';
import { lewes_de_DynamicData } from './cities/delaware/lewes';
import { milford_de_DynamicData } from './cities/delaware/milford';
import { new_castle_de_DynamicData } from './cities/delaware/new-castle';
import { newark_de_DynamicData } from './cities/delaware/newark';
import { smyrna_de_DynamicData } from './cities/delaware/smyrna';
import { wilmington_de_DynamicData } from './cities/delaware/wilmington';
import { apalachicola_fl_DynamicData } from './cities/florida/apalachicola';
import { bartow_fl_DynamicData } from './cities/florida/bartow';
import { belle_glade_fl_DynamicData } from './cities/florida/belle-glade';
import { boca_raton_fl_DynamicData } from './cities/florida/boca-raton';
import { bradenton_fl_DynamicData } from './cities/florida/bradenton';
import { cape_coral_fl_DynamicData } from './cities/florida/cape-coral';
import { clearwater_fl_DynamicData } from './cities/florida/clearwater';
import { cocoa_beach_fl_DynamicData } from './cities/florida/cocoa-beach';
import { cocoa_rockledge_fl_DynamicData } from './cities/florida/cocoa-rockledge';
import { coral_gables_fl_DynamicData } from './cities/florida/coral-gables';
import { daytona_beach_fl_DynamicData } from './cities/florida/daytona-beach';
import { de_land_fl_DynamicData } from './cities/florida/de-land';
import { deerfield_beach_fl_DynamicData } from './cities/florida/deerfield-beach';
import { delray_beach_fl_DynamicData } from './cities/florida/delray-beach';
import { fernandina_beach_fl_DynamicData } from './cities/florida/fernandina-beach';
import { fort_lauderdale_fl_DynamicData } from './cities/florida/fort-lauderdale';
import { fort_myers_fl_DynamicData } from './cities/florida/fort-myers';
import { fort_pierce_fl_DynamicData } from './cities/florida/fort-pierce';
import { fort_walton_beach_fl_DynamicData } from './cities/florida/fort-walton-beach';
import { gainesville_fl_DynamicData } from './cities/florida/gainesville';
import { hallandale_beach_fl_DynamicData } from './cities/florida/hallandale-beach';
import { hialeah_fl_DynamicData } from './cities/florida/hialeah';
import { hollywood_fl_DynamicData } from './cities/florida/hollywood';
import { homestead_fl_DynamicData } from './cities/florida/homestead';
import { jacksonville_fl_DynamicData } from './cities/florida/jacksonville';
import { key_west_fl_DynamicData } from './cities/florida/key-west';
import { lake_city_fl_DynamicData } from './cities/florida/lake-city';
import { lake_wales_fl_DynamicData } from './cities/florida/lake-wales';
import { lakeland_fl_DynamicData } from './cities/florida/lakeland';
import { largo_fl_DynamicData } from './cities/florida/largo';
import { melbourne_fl_DynamicData } from './cities/florida/melbourne';
import { miami_beach_fl_DynamicData } from './cities/florida/miami-beach';
import { miami_fl_DynamicData } from './cities/florida/miami';
import { naples_fl_DynamicData } from './cities/florida/naples';
import { new_smyrna_beach_fl_DynamicData } from './cities/florida/new-smyrna-beach';
import { ocala_fl_DynamicData } from './cities/florida/ocala';
import { orlando_fl_DynamicData } from './cities/florida/orlando';
import { ormond_beach_fl_DynamicData } from './cities/florida/ormond-beach';
import { palatka_fl_DynamicData } from './cities/florida/palatka';
import { palm_bay_fl_DynamicData } from './cities/florida/palm-bay';
import { palm_beach_fl_DynamicData } from './cities/florida/palm-beach';
import { panama_city_fl_DynamicData } from './cities/florida/panama-city';
import { pensacola_fl_DynamicData } from './cities/florida/pensacola';
import { pompano_beach_fl_DynamicData } from './cities/florida/pompano-beach';
import { saint_augustine_fl_DynamicData } from './cities/florida/saint-augustine';
import { saint_petersburg_fl_DynamicData } from './cities/florida/saint-petersburg';
import { sanford_fl_DynamicData } from './cities/florida/sanford';
import { sarasota_fl_DynamicData } from './cities/florida/sarasota';
import { sebring_fl_DynamicData } from './cities/florida/sebring';
import { tallahassee_fl_DynamicData } from './cities/florida/tallahassee';
import { tampa_fl_DynamicData } from './cities/florida/tampa';
import { tarpon_springs_fl_DynamicData } from './cities/florida/tarpon-springs';
import { titusville_fl_DynamicData } from './cities/florida/titusville';
import { venice_fl_DynamicData } from './cities/florida/venice';
import { west_palm_beach_fl_DynamicData } from './cities/florida/west-palm-beach';
import { white_springs_fl_DynamicData } from './cities/florida/white-springs';
import { winter_haven_fl_DynamicData } from './cities/florida/winter-haven';
import { winter_park_fl_DynamicData } from './cities/florida/winter-park';
import { albany_ga_DynamicData } from './cities/georgia/albany';
import { americus_ga_DynamicData } from './cities/georgia/americus';
import { andersonville_ga_DynamicData } from './cities/georgia/andersonville';
import { athens_ga_DynamicData } from './cities/georgia/athens';
import { atlanta_ga_DynamicData } from './cities/georgia/atlanta';
import { augusta_ga_DynamicData } from './cities/georgia/augusta';
import { bainbridge_ga_DynamicData } from './cities/georgia/bainbridge';
import { blairsville_ga_DynamicData } from './cities/georgia/blairsville';
import { brunswick_ga_DynamicData } from './cities/georgia/brunswick';
import { calhoun_ga_DynamicData } from './cities/georgia/calhoun';
import { carrollton_ga_DynamicData } from './cities/georgia/carrollton';
import { columbus_ga_DynamicData } from './cities/georgia/columbus';
import { dahlonega_ga_DynamicData } from './cities/georgia/dahlonega';
import { dalton_ga_DynamicData } from './cities/georgia/dalton';
import { darien_ga_DynamicData } from './cities/georgia/darien';
import { decatur_ga_DynamicData } from './cities/georgia/decatur';
import { douglas_ga_DynamicData } from './cities/georgia/douglas';
import { east_point_ga_DynamicData } from './cities/georgia/east-point';
import { fitzgerald_ga_DynamicData } from './cities/georgia/fitzgerald';
import { fort_valley_ga_DynamicData } from './cities/georgia/fort-valley';
import { gainesville_ga_DynamicData } from './cities/georgia/gainesville';
import { lagrange_ga_DynamicData } from './cities/georgia/la-grange';
import { macon_ga_DynamicData } from './cities/georgia/macon';
import { marietta_ga_DynamicData } from './cities/georgia/marietta';
import { milledgeville_ga_DynamicData } from './cities/georgia/milledgeville';
import { plains_ga_DynamicData } from './cities/georgia/plains';
import { rome_ga_DynamicData } from './cities/georgia/rome';
import { savannah_ga_DynamicData } from './cities/georgia/savannah';
import { toccoa_ga_DynamicData } from './cities/georgia/toccoa';
import { valdosta_ga_DynamicData } from './cities/georgia/valdosta';
import { warm_springs_ga_DynamicData } from './cities/georgia/warm-springs';
import { warner_robins_ga_DynamicData } from './cities/georgia/warner-robins';
import { washington_ga_DynamicData } from './cities/georgia/washington';
import { waycross_ga_DynamicData } from './cities/georgia/waycross';
import { hanalei_hi_DynamicData } from './cities/hawaii/hanalei';
import { hilo_hi_DynamicData } from './cities/hawaii/hilo';
import { honaunau_hi_DynamicData } from './cities/hawaii/honaunau';
import { honolulu_hi_DynamicData } from './cities/hawaii/honolulu';
import { kahului_hi_DynamicData } from './cities/hawaii/kahului';
import { kaneohe_hi_DynamicData } from './cities/hawaii/kaneohe';
import { kapaa_hi_DynamicData } from './cities/hawaii/kapaa';
import { kawaihae_hi_DynamicData } from './cities/hawaii/kawaihae';
import { lahaina_hi_DynamicData } from './cities/hawaii/lahaina';
import { laie_hi_DynamicData } from './cities/hawaii/laie';
import { wahiawa_hi_DynamicData } from './cities/hawaii/wahiawa';
import { wailuku_hi_DynamicData } from './cities/hawaii/wailuku';
import { waimea_hi_DynamicData } from './cities/hawaii/waimea';
import { blackfoot_id_DynamicData } from './cities/idaho/blackfoot';
import { boise_id_DynamicData } from './cities/idaho/boise';
import { bonners_ferry_id_DynamicData } from './cities/idaho/bonners-ferry';
import { caldwell_id_DynamicData } from './cities/idaho/caldwell';
import { coeur_d_alene_id_DynamicData } from './cities/idaho/coeur-d-alene';
import { idaho_city_id_DynamicData } from './cities/idaho/idaho-city';
import { idaho_falls_id_DynamicData } from './cities/idaho/idaho-falls';
import { kellogg_id_DynamicData } from './cities/idaho/kellogg';
import { lewiston_id_DynamicData } from './cities/idaho/lewiston';
import { moscow_id_DynamicData } from './cities/idaho/moscow';
import { nampa_id_DynamicData } from './cities/idaho/nampa';
import { pocatello_id_DynamicData } from './cities/idaho/pocatello';
import { priest_river_id_DynamicData } from './cities/idaho/priest-river';
import { rexburg_id_DynamicData } from './cities/idaho/rexburg';
import { sun_valley_id_DynamicData } from './cities/idaho/sun-valley';
import { twin_falls_id_DynamicData } from './cities/idaho/twin-falls';
import { alton_il_DynamicData } from './cities/illinois/alton';
import { arlington_heights_il_DynamicData } from './cities/illinois/arlington-heights';
import { arthur_il_DynamicData } from './cities/illinois/arthur';
import { aurora_il_DynamicData } from './cities/illinois/aurora';
import { belleville_il_DynamicData } from './cities/illinois/belleville';
import { belvidere_il_DynamicData } from './cities/illinois/belvidere';
import { bloomington_il_DynamicData } from './cities/illinois/bloomington';
import { brookfield_il_DynamicData } from './cities/illinois/brookfield';
import { cahokia_il_DynamicData } from './cities/illinois/cahokia';
import { cairo_il_DynamicData } from './cities/illinois/cairo';
import { calumet_city_il_DynamicData } from './cities/illinois/calumet-city';
import { canton_il_DynamicData } from './cities/illinois/canton';
import { carbondale_il_DynamicData } from './cities/illinois/carbondale';
import { carlinville_il_DynamicData } from './cities/illinois/carlinville';
import { carthage_il_DynamicData } from './cities/illinois/carthage';
import { centralia_il_DynamicData } from './cities/illinois/centralia';
import { champaign_il_DynamicData } from './cities/illinois/champaign';
import { charleston_il_DynamicData } from './cities/illinois/charleston';
import { chester_il_DynamicData } from './cities/illinois/chester';
import { chicago_heights_il_DynamicData } from './cities/illinois/chicago-heights';
import { chicago_il_DynamicData } from './cities/illinois/chicago';
import { cicero_il_DynamicData } from './cities/illinois/cicero';
import { collinsville_il_DynamicData } from './cities/illinois/collinsville';
import { danville_il_DynamicData } from './cities/illinois/danville';
import { decatur_il_DynamicData } from './cities/illinois/decatur';
import { dekalb_il_DynamicData } from './cities/illinois/dekalb';
import { des_plaines_il_DynamicData } from './cities/illinois/des-plaines';
import { dixon_il_DynamicData } from './cities/illinois/dixon';
import { east_moline_il_DynamicData } from './cities/illinois/east-moline';
import { east_saint_louis_il_DynamicData } from './cities/illinois/east-saint-louis';
import { effingham_il_DynamicData } from './cities/illinois/effingham';
import { elgin_il_DynamicData } from './cities/illinois/elgin';
import { elmhurst_il_DynamicData } from './cities/illinois/elmhurst';
import { evanston_il_DynamicData } from './cities/illinois/evanston';
import { freeport_il_DynamicData } from './cities/illinois/freeport';
import { galena_il_DynamicData } from './cities/illinois/galena';
import { galesburg_il_DynamicData } from './cities/illinois/galesburg';
import { glen_ellyn_il_DynamicData } from './cities/illinois/glen-ellyn';
import { glenview_il_DynamicData } from './cities/illinois/glenview';
import { granite_city_il_DynamicData } from './cities/illinois/granite-city';
import { harrisburg_il_DynamicData } from './cities/illinois/harrisburg';
import { herrin_il_DynamicData } from './cities/illinois/herrin';
import { highland_park_il_DynamicData } from './cities/illinois/highland-park';
import { jacksonville_il_DynamicData } from './cities/illinois/jacksonville';
import { joliet_il_DynamicData } from './cities/illinois/joliet';
import { kankakee_il_DynamicData } from './cities/illinois/kankakee';
import { kaskaskia_il_DynamicData } from './cities/illinois/kaskaskia';
import { kewanee_il_DynamicData } from './cities/illinois/kewanee';
import { la_salle_il_DynamicData } from './cities/illinois/la-salle';
import { lake_forest_il_DynamicData } from './cities/illinois/lake-forest';
import { libertyville_il_DynamicData } from './cities/illinois/libertyville';
import { lincoln_il_DynamicData } from './cities/illinois/lincoln';
import { lisle_il_DynamicData } from './cities/illinois/lisle';
import { lombard_il_DynamicData } from './cities/illinois/lombard';
import { macomb_il_DynamicData } from './cities/illinois/macomb';
import { mattoon_il_DynamicData } from './cities/illinois/mattoon';
import { moline_il_DynamicData } from './cities/illinois/moline';
import { monmouth_il_DynamicData } from './cities/illinois/monmouth';
import { mount_vernon_il_DynamicData } from './cities/illinois/mount-vernon';
import { mundelein_il_DynamicData } from './cities/illinois/mundelein';
import { naperville_il_DynamicData } from './cities/illinois/naperville';
import { nauvoo_il_DynamicData } from './cities/illinois/nauvoo';
import { normal_il_DynamicData } from './cities/illinois/normal';
import { north_chicago_il_DynamicData } from './cities/illinois/north-chicago';
import { oak_park_il_DynamicData } from './cities/illinois/oak-park';
import { oregon_il_DynamicData } from './cities/illinois/oregon';
import { ottawa_il_DynamicData } from './cities/illinois/ottawa';
import { palatine_il_DynamicData } from './cities/illinois/palatine';
import { park_forest_il_DynamicData } from './cities/illinois/park-forest';
import { park_ridge_il_DynamicData } from './cities/illinois/park-ridge';
import { pekin_il_DynamicData } from './cities/illinois/pekin';
import { peoria_il_DynamicData } from './cities/illinois/peoria';
import { petersburg_il_DynamicData } from './cities/illinois/petersburg';
import { pontiac_il_DynamicData } from './cities/illinois/pontiac';
import { quincy_il_DynamicData } from './cities/illinois/quincy';
import { rantoul_il_DynamicData } from './cities/illinois/rantoul';
import { river_forest_il_DynamicData } from './cities/illinois/river-forest';
import { rock_island_il_DynamicData } from './cities/illinois/rock-island';
import { rockford_il_DynamicData } from './cities/illinois/rockford';
import { salem_il_DynamicData } from './cities/illinois/salem';
import { shawneetown_il_DynamicData } from './cities/illinois/shawneetown';
import { skokie_il_DynamicData } from './cities/illinois/skokie';
import { south_holland_il_DynamicData } from './cities/illinois/south-holland';
import { springfield_il_DynamicData } from './cities/illinois/springfield';
import { streator_il_DynamicData } from './cities/illinois/streator';
import { summit_il_DynamicData } from './cities/illinois/summit';
import { urbana_il_DynamicData } from './cities/illinois/urbana';
import { vandalia_il_DynamicData } from './cities/illinois/vandalia';
import { virden_il_DynamicData } from './cities/illinois/virden';
import { waukegan_il_DynamicData } from './cities/illinois/waukegan';
import { wheaton_il_DynamicData } from './cities/illinois/wheaton';
import { wilmette_il_DynamicData } from './cities/illinois/wilmette';
import { winnetka_il_DynamicData } from './cities/illinois/winnetka';
import { wood_river_il_DynamicData } from './cities/illinois/wood-river';
import { zion_il_DynamicData } from './cities/illinois/zion';
import { anderson_in_DynamicData } from './cities/indiana/anderson';
import { bedford_in_DynamicData } from './cities/indiana/bedford';
import { bloomington_in_DynamicData } from './cities/indiana/bloomington';
import { columbus_in_DynamicData } from './cities/indiana/columbus';
import { connersville_in_DynamicData } from './cities/indiana/connersville';
import { corydon_in_DynamicData } from './cities/indiana/corydon';
import { crawfordsville_in_DynamicData } from './cities/indiana/crawfordsville';
import { east_chicago_in_DynamicData } from './cities/indiana/east-chicago';
import { elkhart_in_DynamicData } from './cities/indiana/elkhart';
import { elwood_in_DynamicData } from './cities/indiana/elwood';
import { evansville_in_DynamicData } from './cities/indiana/evansville';
import { fort_wayne_in_DynamicData } from './cities/indiana/fort-wayne';
import { french_lick_in_DynamicData } from './cities/indiana/french-lick';
import { gary_in_DynamicData } from './cities/indiana/gary';
import { geneva_in_DynamicData } from './cities/indiana/geneva';
import { goshen_in_DynamicData } from './cities/indiana/goshen';
import { greenfield_in_DynamicData } from './cities/indiana/greenfield';
import { hammond_in_DynamicData } from './cities/indiana/hammond';
import { hobart_in_DynamicData } from './cities/indiana/hobart';
import { huntington_in_DynamicData } from './cities/indiana/huntington';
import { indianapolis_in_DynamicData } from './cities/indiana/indianapolis';
import { jeffersonville_in_DynamicData } from './cities/indiana/jeffersonville';
import { kokomo_in_DynamicData } from './cities/indiana/kokomo';
import { lafayette_in_DynamicData } from './cities/indiana/lafayette';
import { madison_in_DynamicData } from './cities/indiana/madison';
import { marion_in_DynamicData } from './cities/indiana/marion';
import { michigan_city_in_DynamicData } from './cities/indiana/michigan-city';
import { mishawaka_in_DynamicData } from './cities/indiana/mishawaka';
import { muncie_in_DynamicData } from './cities/indiana/muncie';
import { nappanee_in_DynamicData } from './cities/indiana/nappanee';
import { nashville_in_DynamicData } from './cities/indiana/nashville';
import { new_albany_in_DynamicData } from './cities/indiana/new-albany';
import { newcastle_in_DynamicData } from './cities/indiana/new-castle';
import { new_harmony_in_DynamicData } from './cities/indiana/new-harmony';
import { peru_in_DynamicData } from './cities/indiana/peru';
import { plymouth_in_DynamicData } from './cities/indiana/plymouth';
import { richmond_in_DynamicData } from './cities/indiana/richmond';
import { santa_claus_in_DynamicData } from './cities/indiana/santa-claus';
import { shelbyville_in_DynamicData } from './cities/indiana/shelbyville';
import { south_bend_in_DynamicData } from './cities/indiana/south-bend';
import { terre_haute_in_DynamicData } from './cities/indiana/terre-haute';
import { valparaiso_in_DynamicData } from './cities/indiana/valparaiso';
import { vincennes_in_DynamicData } from './cities/indiana/vincennes';
import { wabash_in_DynamicData } from './cities/indiana/wabash';
import { west_lafayette_in_DynamicData } from './cities/indiana/west-lafayette';
import { amana_colonies_ia_DynamicData } from './cities/iowa/amana-colonies';
import { ames_ia_DynamicData } from './cities/iowa/ames';
import { boone_ia_DynamicData } from './cities/iowa/boone';
import { burlington_ia_DynamicData } from './cities/iowa/burlington';
import { cedar_falls_ia_DynamicData } from './cities/iowa/cedar-falls';
import { cedar_rapids_ia_DynamicData } from './cities/iowa/cedar-rapids';
import { charles_city_ia_DynamicData } from './cities/iowa/charles-city';
import { cherokee_ia_DynamicData } from './cities/iowa/cherokee';
import { clinton_ia_DynamicData } from './cities/iowa/clinton';
import { council_bluffs_ia_DynamicData } from './cities/iowa/council-bluffs';
import { davenport_ia_DynamicData } from './cities/iowa/davenport';
import { des_moines_ia_DynamicData } from './cities/iowa/des-moines';
import { dubuque_ia_DynamicData } from './cities/iowa/dubuque';
import { estherville_ia_DynamicData } from './cities/iowa/estherville';
import { fairfield_ia_DynamicData } from './cities/iowa/fairfield';
import { fort_dodge_ia_DynamicData } from './cities/iowa/fort-dodge';
import { grinnell_ia_DynamicData } from './cities/iowa/grinnell';
import { indianola_ia_DynamicData } from './cities/iowa/indianola';
import { iowa_city_ia_DynamicData } from './cities/iowa/iowa-city';
import { keokuk_ia_DynamicData } from './cities/iowa/keokuk';
import { mason_city_ia_DynamicData } from './cities/iowa/mason-city';
import { mount_pleasant_ia_DynamicData } from './cities/iowa/mount-pleasant';
import { muscatine_ia_DynamicData } from './cities/iowa/muscatine';
import { newton_ia_DynamicData } from './cities/iowa/newton';
import { oskaloosa_ia_DynamicData } from './cities/iowa/oskaloosa';
import { ottumwa_ia_DynamicData } from './cities/iowa/ottumwa';
import { sioux_city_ia_DynamicData } from './cities/iowa/sioux-city';
import { waterloo_ia_DynamicData } from './cities/iowa/waterloo';
import { webster_city_ia_DynamicData } from './cities/iowa/webster-city';
import { west_des_moines_ia_DynamicData } from './cities/iowa/west-des-moines';
import { abilene_ks_DynamicData } from './cities/kansas/abilene';
import { arkansas_city_ks_DynamicData } from './cities/kansas/arkansas-city';
import { atchison_ks_DynamicData } from './cities/kansas/atchison';
import { chanute_ks_DynamicData } from './cities/kansas/chanute';
import { coffeyville_ks_DynamicData } from './cities/kansas/coffeyville';
import { councilgrove_ks_DynamicData } from './cities/kansas/council-grove';
import { dodge_city_ks_DynamicData } from './cities/kansas/dodge-city';
import { emporia_ks_DynamicData } from './cities/kansas/emporia';
import { fortscott_ks_DynamicData } from './cities/kansas/fort-scott';
import { garden_city_ks_DynamicData } from './cities/kansas/garden-city';
import { great_bend_ks_DynamicData } from './cities/kansas/great-bend';
import { hays_ks_DynamicData } from './cities/kansas/hays';
import { hutchinson_ks_DynamicData } from './cities/kansas/hutchinson';
import { independence_ks_DynamicData } from './cities/kansas/independence';
import { junction_city_ks_DynamicData } from './cities/kansas/junction-city';
import { kansas_city_ks_DynamicData } from './cities/kansas/kansas-city';
import { lawrence_ks_DynamicData } from './cities/kansas/lawrence';
import { leavenworth_ks_DynamicData } from './cities/kansas/leavenworth';
import { liberal_ks_DynamicData } from './cities/kansas/liberal';
import { manhattan_ks_DynamicData } from './cities/kansas/manhattan';
import { mcpherson_ks_DynamicData } from './cities/kansas/mcpherson';
import { medicine_lodge_ks_DynamicData } from './cities/kansas/medicine-lodge';
import { newton_ks_DynamicData } from './cities/kansas/newton';
import { olathe_ks_DynamicData } from './cities/kansas/olathe';
import { osawatomie_ks_DynamicData } from './cities/kansas/osawatomie';
import { ottawa_ks_DynamicData } from './cities/kansas/ottawa';
import { overland_park_ks_DynamicData } from './cities/kansas/overland-park';
import { pittsburg_ks_DynamicData } from './cities/kansas/pittsburg';
import { salina_ks_DynamicData } from './cities/kansas/salina';
import { shawnee_ks_DynamicData } from './cities/kansas/shawnee';
import { smithcenter_ks_DynamicData } from './cities/kansas/smith-center';
import { topeka_ks_DynamicData } from './cities/kansas/topeka';
import { wichita_ks_DynamicData } from './cities/kansas/wichita';
import { ashland_ky_DynamicData } from './cities/kentucky/ashland';
import { barbourville_ky_DynamicData } from './cities/kentucky/barbourville';
import { bardstown_ky_DynamicData } from './cities/kentucky/bardstown';
import { berea_ky_DynamicData } from './cities/kentucky/berea';
import { boonesborough_ky_DynamicData } from './cities/kentucky/boonesborough';
import { bowling_green_ky_DynamicData } from './cities/kentucky/bowling-green';
import { campbellsville_ky_DynamicData } from './cities/kentucky/campbellsville';
import { covington_ky_DynamicData } from './cities/kentucky/covington';
import { danville_ky_DynamicData } from './cities/kentucky/danville';
import { elizabethtown_ky_DynamicData } from './cities/kentucky/elizabethtown';
import { frankfort_ky_DynamicData } from './cities/kentucky/frankfort';
import { harlan_ky_DynamicData } from './cities/kentucky/harlan';
import { harrodsburg_ky_DynamicData } from './cities/kentucky/harrodsburg';
import { hazard_ky_DynamicData } from './cities/kentucky/hazard';
import { henderson_ky_DynamicData } from './cities/kentucky/henderson';
import { hodgenville_ky_DynamicData } from './cities/kentucky/hodgenville';
import { hopkinsville_ky_DynamicData } from './cities/kentucky/hopkinsville';
import { lexington_ky_DynamicData } from './cities/kentucky/lexington';
import { louisville_ky_DynamicData } from './cities/kentucky/louisville';
import { mayfield_ky_DynamicData } from './cities/kentucky/mayfield';
import { maysville_ky_DynamicData } from './cities/kentucky/maysville';
import { middlesboro_ky_DynamicData } from './cities/kentucky/middlesboro';
import { newport_ky_DynamicData } from './cities/kentucky/newport';
import { owensboro_ky_DynamicData } from './cities/kentucky/owensboro';
import { paducah_ky_DynamicData } from './cities/kentucky/paducah';
import { paris_ky_DynamicData } from './cities/kentucky/paris';
import { richmond_ky_DynamicData } from './cities/kentucky/richmond';
import { abbeville_la_DynamicData } from './cities/louisiana/abbeville';
import { alexandria_la_DynamicData } from './cities/louisiana/alexandria';
import { bastrop_la_DynamicData } from './cities/louisiana/bastrop';
import { baton_rouge_la_DynamicData } from './cities/louisiana/baton-rouge';
import { bogalusa_la_DynamicData } from './cities/louisiana/bogalusa';
import { bossier_city_la_DynamicData } from './cities/louisiana/bossier-city';
import { gretna_la_DynamicData } from './cities/louisiana/gretna';
import { houma_la_DynamicData } from './cities/louisiana/houma';
import { lafayette_la_DynamicData } from './cities/louisiana/lafayette';
import { lake_charles_la_DynamicData } from './cities/louisiana/lake-charles';
import { monroe_la_DynamicData } from './cities/louisiana/monroe';
import { morgan_city_la_DynamicData } from './cities/louisiana/morgan-city';
import { natchitoches_la_DynamicData } from './cities/louisiana/natchitoches';
import { new_iberia_la_DynamicData } from './cities/louisiana/new-iberia';
import { new_orleans_la_DynamicData } from './cities/louisiana/new-orleans';
import { opelousas_la_DynamicData } from './cities/louisiana/opelousas';
import { ruston_la_DynamicData } from './cities/louisiana/ruston';
import { saint_martinville_la_DynamicData } from './cities/louisiana/saint-martinville';
import { shreveport_la_DynamicData } from './cities/louisiana/shreveport';
import { thibodaux_la_DynamicData } from './cities/louisiana/thibodaux';
import { auburn_me_DynamicData } from './cities/maine/auburn';
import { augusta_me_DynamicData } from './cities/maine/augusta';
import { bangor_me_DynamicData } from './cities/maine/bangor';
import { bar_harbor_me_DynamicData } from './cities/maine/bar-harbor';
import { bath_me_DynamicData } from './cities/maine/bath';
import { belfast_me_DynamicData } from './cities/maine/belfast';
import { biddeford_me_DynamicData } from './cities/maine/biddeford';
import { boothbay_harbor_me_DynamicData } from './cities/maine/boothbay-harbor';
import { brunswick_me_DynamicData } from './cities/maine/brunswick';
import { calais_me_DynamicData } from './cities/maine/calais';
import { caribou_me_DynamicData } from './cities/maine/caribou';
import { castine_me_DynamicData } from './cities/maine/castine';
import { eastport_me_DynamicData } from './cities/maine/eastport';
import { ellsworth_me_DynamicData } from './cities/maine/ellsworth';
import { farmington_me_DynamicData } from './cities/maine/farmington';
import { fort_kent_me_DynamicData } from './cities/maine/fort-kent';
import { gardiner_me_DynamicData } from './cities/maine/gardiner';
import { houlton_me_DynamicData } from './cities/maine/houlton';
import { kennebunkport_me_DynamicData } from './cities/maine/kennebunkport';
import { kittery_me_DynamicData } from './cities/maine/kittery';
import { lewiston_me_DynamicData } from './cities/maine/lewiston';
import { lubec_me_DynamicData } from './cities/maine/lubec';
import { machias_me_DynamicData } from './cities/maine/machias';
import { orono_me_DynamicData } from './cities/maine/orono';
import { portland_me_DynamicData } from './cities/maine/portland';
import { presque_isle_me_DynamicData } from './cities/maine/presque-isle';
import { rockland_me_DynamicData } from './cities/maine/rockland';
import { rumford_me_DynamicData } from './cities/maine/rumford';
import { saco_me_DynamicData } from './cities/maine/saco';
import { scarborough_me_DynamicData } from './cities/maine/scarborough';
import { waterville_me_DynamicData } from './cities/maine/waterville';
import { york_me_DynamicData } from './cities/maine/york';
import { aberdeen_md_DynamicData } from './cities/maryland/aberdeen';
import { annapolis_md_DynamicData } from './cities/maryland/annapolis';
import { baltimore_md_DynamicData } from './cities/maryland/baltimore';
import { bethesda_chevy_chase_md_DynamicData } from './cities/maryland/bethesda-chevy-chase';
import { bowie_md_DynamicData } from './cities/maryland/bowie';
import { cambridge_md_DynamicData } from './cities/maryland/cambridge';
import { catonsville_md_DynamicData } from './cities/maryland/catonsville';
import { college_park_md_DynamicData } from './cities/maryland/college-park';
import { columbia_md_DynamicData } from './cities/maryland/columbia';
import { cumberland_md_DynamicData } from './cities/maryland/cumberland';
import { easton_md_DynamicData } from './cities/maryland/easton';
import { elkton_md_DynamicData } from './cities/maryland/elkton';
import { emmitsburg_md_DynamicData } from './cities/maryland/emmitsburg';
import { frederick_md_DynamicData } from './cities/maryland/frederick';
import { greenbelt_md_DynamicData } from './cities/maryland/greenbelt';
import { hagerstown_md_DynamicData } from './cities/maryland/hagerstown';
import { hyattsville_md_DynamicData } from './cities/maryland/hyattsville';
import { laurel_md_DynamicData } from './cities/maryland/laurel';
import { oakland_md_DynamicData } from './cities/maryland/oakland';
import { ocean_city_md_DynamicData } from './cities/maryland/ocean-city';
import { rockville_md_DynamicData } from './cities/maryland/rockville';
import { saint_marys_city_md_DynamicData } from './cities/maryland/saint-marys-city';
import { salisbury_md_DynamicData } from './cities/maryland/salisbury';
import { silver_spring_md_DynamicData } from './cities/maryland/silver-spring';
import { takoma_park_md_DynamicData } from './cities/maryland/takoma-park';
import { towson_md_DynamicData } from './cities/maryland/towson';
import { westminster_md_DynamicData } from './cities/maryland/westminster';
import { abington_ma_DynamicData } from './cities/massachusetts/abington';
import { adams_ma_DynamicData } from './cities/massachusetts/adams';
import { amesbury_ma_DynamicData } from './cities/massachusetts/amesbury';
import { amherst_ma_DynamicData } from './cities/massachusetts/amherst';
import { andover_ma_DynamicData } from './cities/massachusetts/andover';
import { arlington_ma_DynamicData } from './cities/massachusetts/arlington';
import { athol_ma_DynamicData } from './cities/massachusetts/athol';
import { attleboro_ma_DynamicData } from './cities/massachusetts/attleboro';
import { barnstable_ma_DynamicData } from './cities/massachusetts/barnstable';
import { bedford_ma_DynamicData } from './cities/massachusetts/bedford';
import { beverly_ma_DynamicData } from './cities/massachusetts/beverly';
import { boston_ma_DynamicData } from './cities/massachusetts/boston';
import { bourne_ma_DynamicData } from './cities/massachusetts/bourne';
import { braintree_ma_DynamicData } from './cities/massachusetts/braintree';
import { brockton_ma_DynamicData } from './cities/massachusetts/brockton';
import { brookline_ma_DynamicData } from './cities/massachusetts/brookline';
import { cambridge_ma_DynamicData } from './cities/massachusetts/cambridge';
import { canton_ma_DynamicData } from './cities/massachusetts/canton';
import { charlestown_ma_DynamicData } from './cities/massachusetts/charlestown';
import { chelmsford_ma_DynamicData } from './cities/massachusetts/chelmsford';
import { chelsea_ma_DynamicData } from './cities/massachusetts/chelsea';
import { chicopee_ma_DynamicData } from './cities/massachusetts/chicopee';
import { clinton_ma_DynamicData } from './cities/massachusetts/clinton';
import { cohasset_ma_DynamicData } from './cities/massachusetts/cohasset';
import { concord_ma_DynamicData } from './cities/massachusetts/concord';
import { danvers_ma_DynamicData } from './cities/massachusetts/danvers';
import { dartmouth_ma_DynamicData } from './cities/massachusetts/dartmouth';
import { dedham_ma_DynamicData } from './cities/massachusetts/dedham';
import { dennis_ma_DynamicData } from './cities/massachusetts/dennis';
import { duxbury_ma_DynamicData } from './cities/massachusetts/duxbury';
import { eastham_ma_DynamicData } from './cities/massachusetts/eastham';
import { edgartown_ma_DynamicData } from './cities/massachusetts/edgartown';
import { everett_ma_DynamicData } from './cities/massachusetts/everett';
import { fairhaven_ma_DynamicData } from './cities/massachusetts/fairhaven';
import { fall_river_ma_DynamicData } from './cities/massachusetts/fall-river';
import { falmouth_ma_DynamicData } from './cities/massachusetts/falmouth';
import { fitchburg_ma_DynamicData } from './cities/massachusetts/fitchburg';
import { framingham_ma_DynamicData } from './cities/massachusetts/framingham';
import { gloucester_ma_DynamicData } from './cities/massachusetts/gloucester';
import { great_barrington_ma_DynamicData } from './cities/massachusetts/great-barrington';
import { greenfield_ma_DynamicData } from './cities/massachusetts/greenfield';
import { groton_ma_DynamicData } from './cities/massachusetts/groton';
import { harwich_ma_DynamicData } from './cities/massachusetts/harwich';
import { haverhill_ma_DynamicData } from './cities/massachusetts/haverhill';
import { hingham_ma_DynamicData } from './cities/massachusetts/hingham';
import { holyoke_ma_DynamicData } from './cities/massachusetts/holyoke';
import { hyannis_ma_DynamicData } from './cities/massachusetts/hyannis';
import { ipswich_ma_DynamicData } from './cities/massachusetts/ipswich';
import { lawrence_ma_DynamicData } from './cities/massachusetts/lawrence';
import { lenox_ma_DynamicData } from './cities/massachusetts/lenox';
import { leominster_ma_DynamicData } from './cities/massachusetts/leominster';
import { lexington_ma_DynamicData } from './cities/massachusetts/lexington';
import { lowell_ma_DynamicData } from './cities/massachusetts/lowell';
import { ludlow_ma_DynamicData } from './cities/massachusetts/ludlow';
import { lynn_ma_DynamicData } from './cities/massachusetts/lynn';
import { malden_ma_DynamicData } from './cities/massachusetts/malden';
import { marblehead_ma_DynamicData } from './cities/massachusetts/marblehead';
import { marlborough_ma_DynamicData } from './cities/massachusetts/marlborough';
import { medford_ma_DynamicData } from './cities/massachusetts/medford';
import { milton_ma_DynamicData } from './cities/massachusetts/milton';
import { nahant_ma_DynamicData } from './cities/massachusetts/nahant';
import { natick_ma_DynamicData } from './cities/massachusetts/natick';
import { new_bedford_ma_DynamicData } from './cities/massachusetts/new-bedford';
import { newburyport_ma_DynamicData } from './cities/massachusetts/newburyport';
import { newton_ma_DynamicData } from './cities/massachusetts/newton';
import { north_adams_ma_DynamicData } from './cities/massachusetts/north-adams';
import { northampton_ma_DynamicData } from './cities/massachusetts/northampton';
import { norton_ma_DynamicData } from './cities/massachusetts/norton';
import { norwood_ma_DynamicData } from './cities/massachusetts/norwood';
import { peabody_ma_DynamicData } from './cities/massachusetts/peabody';
import { pittsfield_ma_DynamicData } from './cities/massachusetts/pittsfield';
import { plymouth_ma_DynamicData } from './cities/massachusetts/plymouth';
import { provincetown_ma_DynamicData } from './cities/massachusetts/provincetown';
import { quincy_ma_DynamicData } from './cities/massachusetts/quincy';
import { randolph_ma_DynamicData } from './cities/massachusetts/randolph';
import { revere_ma_DynamicData } from './cities/massachusetts/revere';
import { salem_ma_DynamicData } from './cities/massachusetts/salem';
import { sandwich_ma_DynamicData } from './cities/massachusetts/sandwich';
import { saugus_ma_DynamicData } from './cities/massachusetts/saugus';
import { somerville_ma_DynamicData } from './cities/massachusetts/somerville';
import { south_hadley_ma_DynamicData } from './cities/massachusetts/south-hadley';
import { springfield_ma_DynamicData } from './cities/massachusetts/springfield';
import { stockbridge_ma_DynamicData } from './cities/massachusetts/stockbridge';
import { stoughton_ma_DynamicData } from './cities/massachusetts/stoughton';
import { sturbridge_ma_DynamicData } from './cities/massachusetts/sturbridge';
import { sudbury_ma_DynamicData } from './cities/massachusetts/sudbury';
import { taunton_ma_DynamicData } from './cities/massachusetts/taunton';
import { tewksbury_ma_DynamicData } from './cities/massachusetts/tewksbury';
import { truro_ma_DynamicData } from './cities/massachusetts/truro';
import { watertown_ma_DynamicData } from './cities/massachusetts/watertown';
import { webster_ma_DynamicData } from './cities/massachusetts/webster';
import { wellesley_ma_DynamicData } from './cities/massachusetts/wellesley';
import { wellfleet_ma_DynamicData } from './cities/massachusetts/wellfleet';
import { west_bridgewater_ma_DynamicData } from './cities/massachusetts/west-bridgewater';
import { west_springfield_ma_DynamicData } from './cities/massachusetts/west-springfield';
import { westfield_ma_DynamicData } from './cities/massachusetts/westfield';
import { weymouth_ma_DynamicData } from './cities/massachusetts/weymouth';
import { whitman_ma_DynamicData } from './cities/massachusetts/whitman';
import { williamstown_ma_DynamicData } from './cities/massachusetts/williamstown';
import { woburn_ma_DynamicData } from './cities/massachusetts/woburn';
import { woods_hole_ma_DynamicData } from './cities/massachusetts/woods-hole';
import { worcester_ma_DynamicData } from './cities/massachusetts/worcester';
import { adrian_mi_DynamicData } from './cities/michigan/adrian';
import { alma_mi_DynamicData } from './cities/michigan/alma';
import { ann_arbor_mi_DynamicData } from './cities/michigan/ann-arbor';
import { battle_creek_mi_DynamicData } from './cities/michigan/battle-creek';
import { bay_city_mi_DynamicData } from './cities/michigan/bay-city';
import { benton_harbor_mi_DynamicData } from './cities/michigan/benton-harbor';
import { bloomfieldhills_mi_DynamicData } from './cities/michigan/bloomfield-hills';
import { cadillac_mi_DynamicData } from './cities/michigan/cadillac';
import { charlevoix_mi_DynamicData } from './cities/michigan/charlevoix';
import { cheboygan_mi_DynamicData } from './cities/michigan/cheboygan';
import { dearborn_mi_DynamicData } from './cities/michigan/dearborn';
import { detroit_mi_DynamicData } from './cities/michigan/detroit';
import { east_lansing_mi_DynamicData } from './cities/michigan/east-lansing';
import { eastpointe_mi_DynamicData } from './cities/michigan/eastpointe';
import { ecorse_mi_DynamicData } from './cities/michigan/ecorse';
import { escanaba_mi_DynamicData } from './cities/michigan/escanaba';
import { flint_mi_DynamicData } from './cities/michigan/flint';
import { grand_haven_mi_DynamicData } from './cities/michigan/grand-haven';
import { grand_rapids_mi_DynamicData } from './cities/michigan/grand-rapids';
import { grayling_mi_DynamicData } from './cities/michigan/grayling';
import { grosse_pointe_mi_DynamicData } from './cities/michigan/grosse-pointe';
import { hancock_mi_DynamicData } from './cities/michigan/hancock';
import { highland_park_mi_DynamicData } from './cities/michigan/highland-park';
import { holland_mi_DynamicData } from './cities/michigan/holland';
import { houghton_mi_DynamicData } from './cities/michigan/houghton';
import { interlochen_mi_DynamicData } from './cities/michigan/interlochen';
import { iron_mountain_mi_DynamicData } from './cities/michigan/iron-mountain';
import { ironwood_mi_DynamicData } from './cities/michigan/ironwood';
import { ishpeming_mi_DynamicData } from './cities/michigan/ishpeming';
import { jackson_mi_DynamicData } from './cities/michigan/jackson';
import { kalamazoo_mi_DynamicData } from './cities/michigan/kalamazoo';
import { lansing_mi_DynamicData } from './cities/michigan/lansing';
import { livonia_mi_DynamicData } from './cities/michigan/livonia';
import { ludington_mi_DynamicData } from './cities/michigan/ludington';
import { mackinaw_city_mi_DynamicData } from './cities/michigan/mackinaw-city';
import { manistee_mi_DynamicData } from './cities/michigan/manistee';
import { marquette_mi_DynamicData } from './cities/michigan/marquette';
import { menominee_mi_DynamicData } from './cities/michigan/menominee';
import { midland_mi_DynamicData } from './cities/michigan/midland';
import { monroe_mi_DynamicData } from './cities/michigan/monroe';
import { mount_clemens_mi_DynamicData } from './cities/michigan/mount-clemens';
import { mount_pleasant_mi_DynamicData } from './cities/michigan/mount-pleasant';
import { muskegon_mi_DynamicData } from './cities/michigan/muskegon';
import { niles_mi_DynamicData } from './cities/michigan/niles';
import { petoskey_mi_DynamicData } from './cities/michigan/petoskey';
import { pontiac_mi_DynamicData } from './cities/michigan/pontiac';
import { port_huron_mi_DynamicData } from './cities/michigan/port-huron';
import { royal_oak_mi_DynamicData } from './cities/michigan/royal-oak';
import { saginaw_mi_DynamicData } from './cities/michigan/saginaw';
import { saint_ignace_mi_DynamicData } from './cities/michigan/saint-ignace';
import { saint_joseph_mi_DynamicData } from './cities/michigan/saint-joseph';
import { sault_sainte_marie_mi_DynamicData } from './cities/michigan/sault-sainte-marie';
import { traversecity_mi_DynamicData } from './cities/michigan/traverse-city';
import { trenton_mi_DynamicData } from './cities/michigan/trenton';
import { warren_mi_DynamicData } from './cities/michigan/warren';
import { wyandotte_mi_DynamicData } from './cities/michigan/wyandotte';
import { ypsilanti_mi_DynamicData } from './cities/michigan/ypsilanti';
import { albert_lea_mn_DynamicData } from './cities/minnesota/albert-lea';
import { alexandria_mn_DynamicData } from './cities/minnesota/alexandria';
import { austin_mn_DynamicData } from './cities/minnesota/austin';
import { bemidji_mn_DynamicData } from './cities/minnesota/bemidji';
import { bloomington_mn_DynamicData } from './cities/minnesota/bloomington';
import { brainerd_mn_DynamicData } from './cities/minnesota/brainerd';
import { crookston_mn_DynamicData } from './cities/minnesota/crookston';
import { duluth_mn_DynamicData } from './cities/minnesota/duluth';
import { ely_mn_DynamicData } from './cities/minnesota/ely';
import { eveleth_mn_DynamicData } from './cities/minnesota/eveleth';
import { faribault_mn_DynamicData } from './cities/minnesota/faribault';
import { fergus_falls_mn_DynamicData } from './cities/minnesota/fergus-falls';
import { hastings_mn_DynamicData } from './cities/minnesota/hastings';
import { hibbing_mn_DynamicData } from './cities/minnesota/hibbing';
import { international_falls_mn_DynamicData } from './cities/minnesota/international-falls';
import { little_falls_mn_DynamicData } from './cities/minnesota/little-falls';
import { mankato_mn_DynamicData } from './cities/minnesota/mankato';
import { minneapolis_mn_DynamicData } from './cities/minnesota/minneapolis';
import { moorhead_mn_DynamicData } from './cities/minnesota/moorhead';
import { new_ulm_mn_DynamicData } from './cities/minnesota/new-ulm';
import { northfield_mn_DynamicData } from './cities/minnesota/northfield';
import { owatonna_mn_DynamicData } from './cities/minnesota/owatonna';
import { pipestone_mn_DynamicData } from './cities/minnesota/pipestone';
import { redwing_mn_DynamicData } from './cities/minnesota/red-wing';
import { rochester_mn_DynamicData } from './cities/minnesota/rochester';
import { saint_cloud_mn_DynamicData } from './cities/minnesota/saint-cloud';
import { saint_paul_mn_DynamicData } from './cities/minnesota/saint-paul';
import { sauk_centre_mn_DynamicData } from './cities/minnesota/sauk-centre';
import { south_saint_paul_mn_DynamicData } from './cities/minnesota/south-saint-paul';
import { stillwater_mn_DynamicData } from './cities/minnesota/stillwater';
import { virginia_mn_DynamicData } from './cities/minnesota/virginia';
import { willmar_mn_DynamicData } from './cities/minnesota/willmar';
import { winona_mn_DynamicData } from './cities/minnesota/winona';
import { baysaintlouis_ms_DynamicData } from './cities/mississippi/bay-saint-louis';
import { biloxi_ms_DynamicData } from './cities/mississippi/biloxi';
import { canton_ms_DynamicData } from './cities/mississippi/canton';
import { clarksdale_ms_DynamicData } from './cities/mississippi/clarksdale';
import { columbia_ms_DynamicData } from './cities/mississippi/columbia';
import { columbus_ms_DynamicData } from './cities/mississippi/columbus';
import { corinth_ms_DynamicData } from './cities/mississippi/corinth';
import { greenville_ms_DynamicData } from './cities/mississippi/greenville';
import { greenwood_ms_DynamicData } from './cities/mississippi/greenwood';
import { grenada_ms_DynamicData } from './cities/mississippi/grenada';
import { gulfport_ms_DynamicData } from './cities/mississippi/gulfport';
import { hattiesburg_ms_DynamicData } from './cities/mississippi/hattiesburg';
import { holly_springs_ms_DynamicData } from './cities/mississippi/holly-springs';
import { jackson_ms_DynamicData } from './cities/mississippi/jackson';
import { laurel_ms_DynamicData } from './cities/mississippi/laurel';
import { meridian_ms_DynamicData } from './cities/mississippi/meridian';
import { natchez_ms_DynamicData } from './cities/mississippi/natchez';
import { ocean_springs_ms_DynamicData } from './cities/mississippi/ocean-springs';
import { oxford_ms_DynamicData } from './cities/mississippi/oxford';
import { pascagoula_ms_DynamicData } from './cities/mississippi/pascagoula';
import { pass_christian_ms_DynamicData } from './cities/mississippi/pass-christian';
import { philadelphia_ms_DynamicData } from './cities/mississippi/philadelphia';
import { port_gibson_ms_DynamicData } from './cities/mississippi/port-gibson';
import { starkville_ms_DynamicData } from './cities/mississippi/starkville';
import { tupelo_ms_DynamicData } from './cities/mississippi/tupelo';
import { vicksburg_ms_DynamicData } from './cities/mississippi/vicksburg';
import { west_point_ms_DynamicData } from './cities/mississippi/west-point';
import { yazoo_city_ms_DynamicData } from './cities/mississippi/yazoo-city';
import { boonville_mo_DynamicData } from './cities/missouri/boonville';
import { branson_mo_DynamicData } from './cities/missouri/branson';
import { capegirardeau_mo_DynamicData } from './cities/missouri/cape-girardeau';
import { carthage_mo_DynamicData } from './cities/missouri/carthage';
import { chillicothe_mo_DynamicData } from './cities/missouri/chillicothe';
import { clayton_mo_DynamicData } from './cities/missouri/clayton';
import { columbia_mo_DynamicData } from './cities/missouri/columbia';
import { excelsior_springs_mo_DynamicData } from './cities/missouri/excelsior-springs';
import { ferguson_mo_DynamicData } from './cities/missouri/ferguson';
import { florissant_mo_DynamicData } from './cities/missouri/florissant';
import { fulton_mo_DynamicData } from './cities/missouri/fulton';
import { hannibal_mo_DynamicData } from './cities/missouri/hannibal';
import { independence_mo_DynamicData } from './cities/missouri/independence';
import { jefferson_city_mo_DynamicData } from './cities/missouri/jefferson-city';
import { joplin_mo_DynamicData } from './cities/missouri/joplin';
import { kansas_city_mo_DynamicData } from './cities/missouri/kansas-city';
import { kirksville_mo_DynamicData } from './cities/missouri/kirksville';
import { lamar_mo_DynamicData } from './cities/missouri/lamar';
import { lebanon_mo_DynamicData } from './cities/missouri/lebanon';
import { lexington_mo_DynamicData } from './cities/missouri/lexington';
import { maryville_mo_DynamicData } from './cities/missouri/maryville';
import { mexico_mo_DynamicData } from './cities/missouri/mexico';
import { monett_mo_DynamicData } from './cities/missouri/monett';
import { neosho_mo_DynamicData } from './cities/missouri/neosho';
import { new_madrid_mo_DynamicData } from './cities/missouri/new-madrid';
import { rolla_mo_DynamicData } from './cities/missouri/rolla';
import { saint_charles_mo_DynamicData } from './cities/missouri/saint-charles';
import { saint_joseph_mo_DynamicData } from './cities/missouri/saint-joseph';
import { saint_louis_mo_DynamicData } from './cities/missouri/saint-louis';
import { saintegenevieve_mo_DynamicData } from './cities/missouri/sainte-genevieve';
import { salem_mo_DynamicData } from './cities/missouri/salem';
import { sedalia_mo_DynamicData } from './cities/missouri/sedalia';
import { springfield_mo_DynamicData } from './cities/missouri/springfield';
import { warrensburg_mo_DynamicData } from './cities/missouri/warrensburg';
import { west_plains_mo_DynamicData } from './cities/missouri/west-plains';
import { anaconda_mt_DynamicData } from './cities/montana/anaconda';
import { billings_mt_DynamicData } from './cities/montana/billings';
import { bozeman_mt_DynamicData } from './cities/montana/bozeman';
import { butte_mt_DynamicData } from './cities/montana/butte';
import { dillon_mt_DynamicData } from './cities/montana/dillon';
import { fort_benton_mt_DynamicData } from './cities/montana/fort-benton';
import { glendive_mt_DynamicData } from './cities/montana/glendive';
import { great_falls_mt_DynamicData } from './cities/montana/great-falls';
import { havre_mt_DynamicData } from './cities/montana/havre';
import { helena_mt_DynamicData } from './cities/montana/helena';
import { kalispell_mt_DynamicData } from './cities/montana/kalispell';
import { lewistown_mt_DynamicData } from './cities/montana/lewistown';
import { livingston_mt_DynamicData } from './cities/montana/livingston';
import { miles_city_mt_DynamicData } from './cities/montana/miles-city';
import { missoula_mt_DynamicData } from './cities/montana/missoula';
import { virginia_city_mt_DynamicData } from './cities/montana/virginia-city';
import { beatrice_ne_DynamicData } from './cities/nebraska/beatrice';
import { bellevue_ne_DynamicData } from './cities/nebraska/bellevue';
import { boys_town_ne_DynamicData } from './cities/nebraska/boys-town';
import { chadron_ne_DynamicData } from './cities/nebraska/chadron';
import { columbus_ne_DynamicData } from './cities/nebraska/columbus';
import { fremont_ne_DynamicData } from './cities/nebraska/fremont';
import { grand_island_ne_DynamicData } from './cities/nebraska/grand-island';
import { hastings_ne_DynamicData } from './cities/nebraska/hastings';
import { kearney_ne_DynamicData } from './cities/nebraska/kearney';
import { lincoln_ne_DynamicData } from './cities/nebraska/lincoln';
import { mccook_ne_DynamicData } from './cities/nebraska/mccook';
import { minden_ne_DynamicData } from './cities/nebraska/minden';
import { nebraska_city_ne_DynamicData } from './cities/nebraska/nebraska-city';
import { norfolk_ne_DynamicData } from './cities/nebraska/norfolk';
import { north_platte_ne_DynamicData } from './cities/nebraska/north-platte';
import { omaha_ne_DynamicData } from './cities/nebraska/omaha';
import { plattsmouth_ne_DynamicData } from './cities/nebraska/plattsmouth';
import { red_cloud_ne_DynamicData } from './cities/nebraska/red-cloud';
import { sidney_ne_DynamicData } from './cities/nebraska/sidney';
import { boulder_city_nv_DynamicData } from './cities/nevada/boulder-city';
import { carson_city_nv_DynamicData } from './cities/nevada/carson-city';
import { elko_nv_DynamicData } from './cities/nevada/elko';
import { ely_nv_DynamicData } from './cities/nevada/ely';
import { fallon_nv_DynamicData } from './cities/nevada/fallon';
import { genoa_nv_DynamicData } from './cities/nevada/genoa';
import { goldfield_nv_DynamicData } from './cities/nevada/goldfield';
import { henderson_nv_DynamicData } from './cities/nevada/henderson';
import { las_vegas_nv_DynamicData } from './cities/nevada/las-vegas';
import { north_las_vegas_nv_DynamicData } from './cities/nevada/north-las-vegas';
import { reno_nv_DynamicData } from './cities/nevada/reno';
import { sparks_nv_DynamicData } from './cities/nevada/sparks';
import { virginia_city_nv_DynamicData } from './cities/nevada/virginia-city';
import { winnemucca_nv_DynamicData } from './cities/nevada/winnemucca';
import { berlin_nh_DynamicData } from './cities/new_hampshire/berlin';
import { claremont_nh_DynamicData } from './cities/new_hampshire/claremont';
import { concord_nh_DynamicData } from './cities/new_hampshire/concord';
import { derry_nh_DynamicData } from './cities/new_hampshire/derry';
import { dover_nh_DynamicData } from './cities/new_hampshire/dover';
import { durham_nh_DynamicData } from './cities/new_hampshire/durham';
import { exeter_nh_DynamicData } from './cities/new_hampshire/exeter';
import { franklin_nh_DynamicData } from './cities/new_hampshire/franklin';
import { hanover_nh_DynamicData } from './cities/new_hampshire/hanover';
import { hillsborough_nh_DynamicData } from './cities/new_hampshire/hillsborough';
import { keene_nh_DynamicData } from './cities/new_hampshire/keene';
import { laconia_nh_DynamicData } from './cities/new_hampshire/laconia';
import { lebanon_nh_DynamicData } from './cities/new_hampshire/lebanon';
import { manchester_nh_DynamicData } from './cities/new_hampshire/manchester';
import { nashua_nh_DynamicData } from './cities/new_hampshire/nashua';
import { peterborough_nh_DynamicData } from './cities/new_hampshire/peterborough';
import { plymouth_nh_DynamicData } from './cities/new_hampshire/plymouth';
import { portsmouth_nh_DynamicData } from './cities/new_hampshire/portsmouth';
import { rochester_nh_DynamicData } from './cities/new_hampshire/rochester';
import { salem_nh_DynamicData } from './cities/new_hampshire/salem';
import { somersworth_nh_DynamicData } from './cities/new_hampshire/somersworth';
import { asbury_park_nj_DynamicData } from './cities/new_jersey/asbury-park';
import { atlantic_city_nj_DynamicData } from './cities/new_jersey/atlantic-city';
import { bayonne_nj_DynamicData } from './cities/new_jersey/bayonne';
import { bloomfield_nj_DynamicData } from './cities/new_jersey/bloomfield';
import { bordentown_nj_DynamicData } from './cities/new_jersey/bordentown';
import { bound_brook_nj_DynamicData } from './cities/new_jersey/bound-brook';
import { bridgeton_nj_DynamicData } from './cities/new_jersey/bridgeton';
import { burlington_nj_DynamicData } from './cities/new_jersey/burlington';
import { caldwell_nj_DynamicData } from './cities/new_jersey/caldwell';
import { camden_nj_DynamicData } from './cities/new_jersey/camden';
import { cape_may_nj_DynamicData } from './cities/new_jersey/cape-may';
import { clifton_nj_DynamicData } from './cities/new_jersey/clifton';
import { cranford_nj_DynamicData } from './cities/new_jersey/cranford';
import { east_orange_nj_DynamicData } from './cities/new_jersey/east-orange';
import { edison_nj_DynamicData } from './cities/new_jersey/edison';
import { elizabeth_nj_DynamicData } from './cities/new_jersey/elizabeth';
import { englewood_nj_DynamicData } from './cities/new_jersey/englewood';
import { fort_lee_nj_DynamicData } from './cities/new_jersey/fort-lee';
import { glassboro_nj_DynamicData } from './cities/new_jersey/glassboro';
import { hackensack_nj_DynamicData } from './cities/new_jersey/hackensack';
import { haddonfield_nj_DynamicData } from './cities/new_jersey/haddonfield';
import { hoboken_nj_DynamicData } from './cities/new_jersey/hoboken';
import { irvington_nj_DynamicData } from './cities/new_jersey/irvington';
import { jersey_city_nj_DynamicData } from './cities/new_jersey/jersey-city';
import { lakehurst_nj_DynamicData } from './cities/new_jersey/lakehurst';
import { lakewood_nj_DynamicData } from './cities/new_jersey/lakewood';
import { long_beach_nj_DynamicData } from './cities/new_jersey/long-beach';
import { long_branch_nj_DynamicData } from './cities/new_jersey/long-branch';
import { madison_nj_DynamicData } from './cities/new_jersey/madison';
import { menlo_park_nj_DynamicData } from './cities/new_jersey/menlo-park';
import { millburn_nj_DynamicData } from './cities/new_jersey/millburn';
import { millville_nj_DynamicData } from './cities/new_jersey/millville';
import { montclair_nj_DynamicData } from './cities/new_jersey/montclair';
import { morristown_nj_DynamicData } from './cities/new_jersey/morristown';
import { mount_holly_nj_DynamicData } from './cities/new_jersey/mount-holly';
import { new_brunswick_nj_DynamicData } from './cities/new_jersey/new-brunswick';
import { new_milford_nj_DynamicData } from './cities/new_jersey/new-milford';
import { newark_nj_DynamicData } from './cities/new_jersey/newark';
import { ocean_city_nj_DynamicData } from './cities/new_jersey/ocean-city';
import { orange_nj_DynamicData } from './cities/new_jersey/orange';
import { parsippany_troy_hills_nj_DynamicData } from './cities/new_jersey/parsippany-troy-hills';
import { passaic_nj_DynamicData } from './cities/new_jersey/passaic';
import { paterson_nj_DynamicData } from './cities/new_jersey/paterson';
import { perth_amboy_nj_DynamicData } from './cities/new_jersey/perth-amboy';
import { plainfield_nj_DynamicData } from './cities/new_jersey/plainfield';
import { princeton_nj_DynamicData } from './cities/new_jersey/princeton';
import { ridgewood_nj_DynamicData } from './cities/new_jersey/ridgewood';
import { roselle_nj_DynamicData } from './cities/new_jersey/roselle';
import { rutherford_nj_DynamicData } from './cities/new_jersey/rutherford';
import { salem_nj_DynamicData } from './cities/new_jersey/salem';
import { somerville_nj_DynamicData } from './cities/new_jersey/somerville';
import { south_orange_village_nj_DynamicData } from './cities/new_jersey/south-orange-village';
import { totowa_nj_DynamicData } from './cities/new_jersey/totowa';
import { trenton_nj_DynamicData } from './cities/new_jersey/trenton';
import { union_city_nj_DynamicData } from './cities/new_jersey/union-city';
import { union_nj_DynamicData } from './cities/new_jersey/union';
import { vineland_nj_DynamicData } from './cities/new_jersey/vineland';
import { wayne_nj_DynamicData } from './cities/new_jersey/wayne';
import { weehawken_nj_DynamicData } from './cities/new_jersey/weehawken';
import { west_new_york_nj_DynamicData } from './cities/new_jersey/west-new-york';
import { west_orange_nj_DynamicData } from './cities/new_jersey/west-orange';
import { willingboro_nj_DynamicData } from './cities/new_jersey/willingboro';
import { woodbridge_nj_DynamicData } from './cities/new_jersey/woodbridge';
import { acoma_nm_DynamicData } from './cities/new_mexico/acoma';
import { alamogordo_nm_DynamicData } from './cities/new_mexico/alamogordo';
import { albuquerque_nm_DynamicData } from './cities/new_mexico/albuquerque';
import { artesia_nm_DynamicData } from './cities/new_mexico/artesia';
import { belen_nm_DynamicData } from './cities/new_mexico/belen';
import { carlsbad_nm_DynamicData } from './cities/new_mexico/carlsbad';
import { clovis_nm_DynamicData } from './cities/new_mexico/clovis';
import { deming_nm_DynamicData } from './cities/new_mexico/deming';
import { farmington_nm_DynamicData } from './cities/new_mexico/farmington';
import { gallup_nm_DynamicData } from './cities/new_mexico/gallup';
import { grants_nm_DynamicData } from './cities/new_mexico/grants';
import { hobbs_nm_DynamicData } from './cities/new_mexico/hobbs';
import { las_cruces_nm_DynamicData } from './cities/new_mexico/las-cruces';
import { las_vegas_nm_DynamicData } from './cities/new_mexico/las-vegas';
import { los_alamos_nm_DynamicData } from './cities/new_mexico/los-alamos';
import { lovington_nm_DynamicData } from './cities/new_mexico/lovington';
import { portales_nm_DynamicData } from './cities/new_mexico/portales';
import { raton_nm_DynamicData } from './cities/new_mexico/raton';
import { roswell_nm_DynamicData } from './cities/new_mexico/roswell';
import { santa_fe_nm_DynamicData } from './cities/new_mexico/santa-fe';
import { shiprock_nm_DynamicData } from './cities/new_mexico/shiprock';
import { silvercity_nm_DynamicData } from './cities/new_mexico/silver-city';
import { socorro_nm_DynamicData } from './cities/new_mexico/socorro';
import { taos_nm_DynamicData } from './cities/new_mexico/taos';
import { truth_or_consequences_nm_DynamicData } from './cities/new_mexico/truth-or-consequences';
import { tucumcari_nm_DynamicData } from './cities/new_mexico/tucumcari';
import { albany_ny_DynamicData } from './cities/new_york/albany';
import { amsterdam_ny_DynamicData } from './cities/new_york/amsterdam';
import { auburn_ny_DynamicData } from './cities/new_york/auburn';
import { babylon_ny_DynamicData } from './cities/new_york/babylon';
import { batavia_ny_DynamicData } from './cities/new_york/batavia';
import { beacon_ny_DynamicData } from './cities/new_york/beacon';
import { bedford_ny_DynamicData } from './cities/new_york/bedford';
import { binghamton_ny_DynamicData } from './cities/new_york/binghamton';
import { bronx_ny_DynamicData } from './cities/new_york/bronx';
import { brooklyn_ny_DynamicData } from './cities/new_york/brooklyn';
import { buffalo_ny_DynamicData } from './cities/new_york/buffalo';
import { chautauqua_ny_DynamicData } from './cities/new_york/chautauqua';
import { cheektowaga_ny_DynamicData } from './cities/new_york/cheektowaga';
import { clinton_ny_DynamicData } from './cities/new_york/clinton';
import { cohoes_ny_DynamicData } from './cities/new_york/cohoes';
import { coney_island_ny_DynamicData } from './cities/new_york/coney-island';
import { cooperstown_ny_DynamicData } from './cities/new_york/cooperstown';
import { corning_ny_DynamicData } from './cities/new_york/corning';
import { cortland_ny_DynamicData } from './cities/new_york/cortland';
import { crown_point_ny_DynamicData } from './cities/new_york/crown-point';
import { dunkirk_ny_DynamicData } from './cities/new_york/dunkirk';
import { eastaurora_ny_DynamicData } from './cities/new_york/east-aurora';
import { east_hampton_ny_DynamicData } from './cities/new_york/east-hampton';
import { eastchester_ny_DynamicData } from './cities/new_york/eastchester';
import { elmira_ny_DynamicData } from './cities/new_york/elmira';
import { flushing_ny_DynamicData } from './cities/new_york/flushing';
import { forest_hills_ny_DynamicData } from './cities/new_york/forest-hills';
import { fredonia_ny_DynamicData } from './cities/new_york/fredonia';
import { garden_city_ny_DynamicData } from './cities/new_york/garden-city';
import { geneva_ny_DynamicData } from './cities/new_york/geneva';
import { glens_falls_ny_DynamicData } from './cities/new_york/glens-falls';
import { gloversville_ny_DynamicData } from './cities/new_york/gloversville';
import { great_neck_ny_DynamicData } from './cities/new_york/great-neck';
import { hammondsport_ny_DynamicData } from './cities/new_york/hammondsport';
import { harlem_ny_DynamicData } from './cities/new_york/harlem';
import { hempstead_ny_DynamicData } from './cities/new_york/hempstead';
import { herkimer_ny_DynamicData } from './cities/new_york/herkimer';
import { hudson_ny_DynamicData } from './cities/new_york/hudson';
import { huntington_ny_DynamicData } from './cities/new_york/huntington';
import { hyde_park_ny_DynamicData } from './cities/new_york/hyde-park';
import { ilion_ny_DynamicData } from './cities/new_york/ilion';
import { ithaca_ny_DynamicData } from './cities/new_york/ithaca';
import { jamestown_ny_DynamicData } from './cities/new_york/jamestown';
import { johnstown_ny_DynamicData } from './cities/new_york/johnstown';
import { kingston_ny_DynamicData } from './cities/new_york/kingston';
import { lackawanna_ny_DynamicData } from './cities/new_york/lackawanna';
import { lake_placid_ny_DynamicData } from './cities/new_york/lake-placid';
import { levittown_ny_DynamicData } from './cities/new_york/levittown';
import { lockport_ny_DynamicData } from './cities/new_york/lockport';
import { mamaroneck_ny_DynamicData } from './cities/new_york/mamaroneck';
import { manhattan_ny_DynamicData } from './cities/new_york/manhattan';
import { massena_ny_DynamicData } from './cities/new_york/massena';
import { middletown_ny_DynamicData } from './cities/new_york/middletown';
import { mineola_ny_DynamicData } from './cities/new_york/mineola';
import { mount_vernon_ny_DynamicData } from './cities/new_york/mount-vernon';
import { new_paltz_ny_DynamicData } from './cities/new_york/new-paltz';
import { new_rochelle_ny_DynamicData } from './cities/new_york/new-rochelle';
import { new_windsor_ny_DynamicData } from './cities/new_york/new-windsor';
import { new_york_city_ny_DynamicData } from './cities/new_york/new-york-city';
import { newburgh_ny_DynamicData } from './cities/new_york/newburgh';
import { niagara_falls_ny_DynamicData } from './cities/new_york/niagara-falls';
import { north_hempstead_ny_DynamicData } from './cities/new_york/north-hempstead';
import { nyack_ny_DynamicData } from './cities/new_york/nyack';
import { ogdensburg_ny_DynamicData } from './cities/new_york/ogdensburg';
import { olean_ny_DynamicData } from './cities/new_york/olean';
import { oneida_ny_DynamicData } from './cities/new_york/oneida';
import { oneonta_ny_DynamicData } from './cities/new_york/oneonta';
import { ossining_ny_DynamicData } from './cities/new_york/ossining';
import { oswego_ny_DynamicData } from './cities/new_york/oswego';
import { oyster_bay_ny_DynamicData } from './cities/new_york/oyster-bay';
import { palmyra_ny_DynamicData } from './cities/new_york/palmyra';
import { peekskill_ny_DynamicData } from './cities/new_york/peekskill';
import { plattsburgh_ny_DynamicData } from './cities/new_york/plattsburgh';
import { port_washington_ny_DynamicData } from './cities/new_york/port-washington';
import { potsdam_ny_DynamicData } from './cities/new_york/potsdam';
import { poughkeepsie_ny_DynamicData } from './cities/new_york/poughkeepsie';
import { queens_ny_DynamicData } from './cities/new_york/queens';
import { rensselaer_ny_DynamicData } from './cities/new_york/rensselaer';
import { rochester_ny_DynamicData } from './cities/new_york/rochester';
import { rome_ny_DynamicData } from './cities/new_york/rome';
import { rotterdam_ny_DynamicData } from './cities/new_york/rotterdam';
import { rye_ny_DynamicData } from './cities/new_york/rye';
import { sag_harbor_ny_DynamicData } from './cities/new_york/sag-harbor';
import { saranac_lake_ny_DynamicData } from './cities/new_york/saranac-lake';
import { saratoga_springs_ny_DynamicData } from './cities/new_york/saratoga-springs';
import { scarsdale_ny_DynamicData } from './cities/new_york/scarsdale';
import { schenectady_ny_DynamicData } from './cities/new_york/schenectady';
import { seneca_falls_ny_DynamicData } from './cities/new_york/seneca-falls';
import { southampton_ny_DynamicData } from './cities/new_york/southampton';
import { staten_island_ny_DynamicData } from './cities/new_york/staten-island';
import { stony_brook_ny_DynamicData } from './cities/new_york/stony-brook';
import { stony_point_ny_DynamicData } from './cities/new_york/stony-point';
import { syracuse_ny_DynamicData } from './cities/new_york/syracuse';
import { tarrytown_ny_DynamicData } from './cities/new_york/tarrytown';
import { ticonderoga_ny_DynamicData } from './cities/new_york/ticonderoga';
import { tonawanda_ny_DynamicData } from './cities/new_york/tonawanda';
import { troy_ny_DynamicData } from './cities/new_york/troy';
import { utica_ny_DynamicData } from './cities/new_york/utica';
import { watertown_ny_DynamicData } from './cities/new_york/watertown';
import { watervliet_ny_DynamicData } from './cities/new_york/watervliet';
import { watkins_glen_ny_DynamicData } from './cities/new_york/watkins-glen';
import { west_seneca_ny_DynamicData } from './cities/new_york/west-seneca';
import { white_plains_ny_DynamicData } from './cities/new_york/white-plains';
import { woodstock_ny_DynamicData } from './cities/new_york/woodstock';
import { yonkers_ny_DynamicData } from './cities/new_york/yonkers';
import { asheboro_nc_DynamicData } from './cities/north_carolina/asheboro';
import { asheville_nc_DynamicData } from './cities/north_carolina/asheville';
import { bath_nc_DynamicData } from './cities/north_carolina/bath';
import { beaufort_nc_DynamicData } from './cities/north_carolina/beaufort';
import { boone_nc_DynamicData } from './cities/north_carolina/boone';
import { burlington_nc_DynamicData } from './cities/north_carolina/burlington';
import { chapel_hill_nc_DynamicData } from './cities/north_carolina/chapel-hill';
import { charlotte_nc_DynamicData } from './cities/north_carolina/charlotte';
import { concord_nc_DynamicData } from './cities/north_carolina/concord';
import { durham_nc_DynamicData } from './cities/north_carolina/durham';
import { edenton_nc_DynamicData } from './cities/north_carolina/edenton';
import { elizabeth_city_nc_DynamicData } from './cities/north_carolina/elizabeth-city';
import { fayetteville_nc_DynamicData } from './cities/north_carolina/fayetteville';
import { gastonia_nc_DynamicData } from './cities/north_carolina/gastonia';
import { goldsboro_nc_DynamicData } from './cities/north_carolina/goldsboro';
import { greensboro_nc_DynamicData } from './cities/north_carolina/greensboro';
import { greenville_nc_DynamicData } from './cities/north_carolina/greenville';
import { halifax_nc_DynamicData } from './cities/north_carolina/halifax';
import { henderson_nc_DynamicData } from './cities/north_carolina/henderson';
import { hickory_nc_DynamicData } from './cities/north_carolina/hickory';
import { high_point_nc_DynamicData } from './cities/north_carolina/high-point';
import { hillsborough_nc_DynamicData } from './cities/north_carolina/hillsborough';
import { jacksonville_nc_DynamicData } from './cities/north_carolina/jacksonville';
import { kinston_nc_DynamicData } from './cities/north_carolina/kinston';
import { kitty_hawk_nc_DynamicData } from './cities/north_carolina/kitty-hawk';
import { lumberton_nc_DynamicData } from './cities/north_carolina/lumberton';
import { morehead_city_nc_DynamicData } from './cities/north_carolina/morehead-city';
import { morganton_nc_DynamicData } from './cities/north_carolina/morganton';
import { nags_head_nc_DynamicData } from './cities/north_carolina/nags-head';
import { new_bern_nc_DynamicData } from './cities/north_carolina/new-bern';
import { pinehurst_nc_DynamicData } from './cities/north_carolina/pinehurst';
import { raleigh_nc_DynamicData } from './cities/north_carolina/raleigh';
import { rockymount_nc_DynamicData } from './cities/north_carolina/rocky-mount';
import { salisbury_nc_DynamicData } from './cities/north_carolina/salisbury';
import { shelby_nc_DynamicData } from './cities/north_carolina/shelby';
import { washington_nc_DynamicData } from './cities/north_carolina/washington';
import { wilmington_nc_DynamicData } from './cities/north_carolina/wilmington';
import { wilson_nc_DynamicData } from './cities/north_carolina/wilson';
import { winston_salem_nc_DynamicData } from './cities/north_carolina/winston-salem';
import { bismarck_nd_DynamicData } from './cities/north_dakota/bismarck';
import { devils_lake_nd_DynamicData } from './cities/north_dakota/devils-lake';
import { dickinson_nd_DynamicData } from './cities/north_dakota/dickinson';
import { fargo_nd_DynamicData } from './cities/north_dakota/fargo';
import { grand_forks_nd_DynamicData } from './cities/north_dakota/grand-forks';
import { jamestown_nd_DynamicData } from './cities/north_dakota/jamestown';
import { mandan_nd_DynamicData } from './cities/north_dakota/mandan';
import { minot_nd_DynamicData } from './cities/north_dakota/minot';
import { rugby_nd_DynamicData } from './cities/north_dakota/rugby';
import { valleycity_nd_DynamicData } from './cities/north_dakota/valley-city';
import { wahpeton_nd_DynamicData } from './cities/north_dakota/wahpeton';
import { williston_nd_DynamicData } from './cities/north_dakota/williston';
import { akron_oh_DynamicData } from './cities/ohio/akron';
import { alliance_oh_DynamicData } from './cities/ohio/alliance';
import { ashtabula_oh_DynamicData } from './cities/ohio/ashtabula';
import { athens_oh_DynamicData } from './cities/ohio/athens';
import { barberton_oh_DynamicData } from './cities/ohio/barberton';
import { bedford_oh_DynamicData } from './cities/ohio/bedford';
import { bellefontaine_oh_DynamicData } from './cities/ohio/bellefontaine';
import { bowling_green_oh_DynamicData } from './cities/ohio/bowling-green';
import { canton_oh_DynamicData } from './cities/ohio/canton';
import { chillicothe_oh_DynamicData } from './cities/ohio/chillicothe';
import { cincinnati_oh_DynamicData } from './cities/ohio/cincinnati';
import { cleveland_heights_oh_DynamicData } from './cities/ohio/cleveland-heights';
import { cleveland_oh_DynamicData } from './cities/ohio/cleveland';
import { columbus_oh_DynamicData } from './cities/ohio/columbus';
import { conneaut_oh_DynamicData } from './cities/ohio/conneaut';
import { cuyahoga_falls_oh_DynamicData } from './cities/ohio/cuyahoga-falls';
import { dayton_oh_DynamicData } from './cities/ohio/dayton';
import { defiance_oh_DynamicData } from './cities/ohio/defiance';
import { delaware_oh_DynamicData } from './cities/ohio/delaware';
import { east_cleveland_oh_DynamicData } from './cities/ohio/east-cleveland';
import { east_liverpool_oh_DynamicData } from './cities/ohio/east-liverpool';
import { elyria_oh_DynamicData } from './cities/ohio/elyria';
import { euclid_oh_DynamicData } from './cities/ohio/euclid';
import { findlay_oh_DynamicData } from './cities/ohio/findlay';
import { gallipolis_oh_DynamicData } from './cities/ohio/gallipolis';
import { greenville_oh_DynamicData } from './cities/ohio/greenville';
import { hamilton_oh_DynamicData } from './cities/ohio/hamilton';
import { kent_oh_DynamicData } from './cities/ohio/kent';
import { kettering_oh_DynamicData } from './cities/ohio/kettering';
import { lakewood_oh_DynamicData } from './cities/ohio/lakewood';
import { lancaster_oh_DynamicData } from './cities/ohio/lancaster';
import { lima_oh_DynamicData } from './cities/ohio/lima';
import { lorain_oh_DynamicData } from './cities/ohio/lorain';
import { mansfield_oh_DynamicData } from './cities/ohio/mansfield';
import { marietta_oh_DynamicData } from './cities/ohio/marietta';
import { marion_oh_DynamicData } from './cities/ohio/marion';
import { martins_ferry_oh_DynamicData } from './cities/ohio/martins-ferry';
import { massillon_oh_DynamicData } from './cities/ohio/massillon';
import { mentor_oh_DynamicData } from './cities/ohio/mentor';
import { middletown_oh_DynamicData } from './cities/ohio/middletown';
import { milan_oh_DynamicData } from './cities/ohio/milan';
import { mount_vernon_oh_DynamicData } from './cities/ohio/mount-vernon';
import { new_philadelphia_oh_DynamicData } from './cities/ohio/new-philadelphia';
import { newark_oh_DynamicData } from './cities/ohio/newark';
import { niles_oh_DynamicData } from './cities/ohio/niles';
import { north_college_hill_oh_DynamicData } from './cities/ohio/north-college-hill';
import { norwalk_oh_DynamicData } from './cities/ohio/norwalk';
import { oberlin_oh_DynamicData } from './cities/ohio/oberlin';
import { painesville_oh_DynamicData } from './cities/ohio/painesville';
import { parma_oh_DynamicData } from './cities/ohio/parma';
import { piqua_oh_DynamicData } from './cities/ohio/piqua';
import { portsmouth_oh_DynamicData } from './cities/ohio/portsmouth';
import { put_in_bay_oh_DynamicData } from './cities/ohio/put-in-bay';
import { salem_oh_DynamicData } from './cities/ohio/salem';
import { sandusky_oh_DynamicData } from './cities/ohio/sandusky';
import { shaker_heights_oh_DynamicData } from './cities/ohio/shaker-heights';
import { springfield_oh_DynamicData } from './cities/ohio/springfield';
import { steubenville_oh_DynamicData } from './cities/ohio/steubenville';
import { tiffin_oh_DynamicData } from './cities/ohio/tiffin';
import { toledo_oh_DynamicData } from './cities/ohio/toledo';
import { urbana_oh_DynamicData } from './cities/ohio/urbana';
import { warren_oh_DynamicData } from './cities/ohio/warren';
import { wooster_oh_DynamicData } from './cities/ohio/wooster';
import { worthington_oh_DynamicData } from './cities/ohio/worthington';
import { xenia_oh_DynamicData } from './cities/ohio/xenia';
import { yellow_springs_oh_DynamicData } from './cities/ohio/yellow-springs';
import { youngstown_oh_DynamicData } from './cities/ohio/youngstown';
import { zanesville_oh_DynamicData } from './cities/ohio/zanesville';
import { ada_ok_DynamicData } from './cities/oklahoma/ada';
import { altus_ok_DynamicData } from './cities/oklahoma/altus';
import { alva_ok_DynamicData } from './cities/oklahoma/alva';
import { anadarko_ok_DynamicData } from './cities/oklahoma/anadarko';
import { ardmore_ok_DynamicData } from './cities/oklahoma/ardmore';
import { bartlesville_ok_DynamicData } from './cities/oklahoma/bartlesville';
import { bethany_ok_DynamicData } from './cities/oklahoma/bethany';
import { chickasha_ok_DynamicData } from './cities/oklahoma/chickasha';
import { claremore_ok_DynamicData } from './cities/oklahoma/claremore';
import { clinton_ok_DynamicData } from './cities/oklahoma/clinton';
import { cushing_ok_DynamicData } from './cities/oklahoma/cushing';
import { duncan_ok_DynamicData } from './cities/oklahoma/duncan';
import { durant_ok_DynamicData } from './cities/oklahoma/durant';
import { edmond_ok_DynamicData } from './cities/oklahoma/edmond';
import { el_reno_ok_DynamicData } from './cities/oklahoma/el-reno';
import { elk_city_ok_DynamicData } from './cities/oklahoma/elk-city';
import { enid_ok_DynamicData } from './cities/oklahoma/enid';
import { eufaula_ok_DynamicData } from './cities/oklahoma/eufaula';
import { frederick_ok_DynamicData } from './cities/oklahoma/frederick';
import { guthrie_ok_DynamicData } from './cities/oklahoma/guthrie';
import { guymon_ok_DynamicData } from './cities/oklahoma/guymon';
import { hobart_ok_DynamicData } from './cities/oklahoma/hobart';
import { holdenville_ok_DynamicData } from './cities/oklahoma/holdenville';
import { hugo_ok_DynamicData } from './cities/oklahoma/hugo';
import { lawton_ok_DynamicData } from './cities/oklahoma/lawton';
import { mcalester_ok_DynamicData } from './cities/oklahoma/mcalester';
import { miami_ok_DynamicData } from './cities/oklahoma/miami';
import { midwest_city_ok_DynamicData } from './cities/oklahoma/midwest-city';
import { moore_ok_DynamicData } from './cities/oklahoma/moore';
import { muskogee_ok_DynamicData } from './cities/oklahoma/muskogee';
import { norman_ok_DynamicData } from './cities/oklahoma/norman';
import { oklahoma_city_ok_DynamicData } from './cities/oklahoma/oklahoma-city';
import { okmulgee_ok_DynamicData } from './cities/oklahoma/okmulgee';
import { pauls_valley_ok_DynamicData } from './cities/oklahoma/pauls-valley';
import { pawhuska_ok_DynamicData } from './cities/oklahoma/pawhuska';
import { perry_ok_DynamicData } from './cities/oklahoma/perry';
import { ponca_city_ok_DynamicData } from './cities/oklahoma/ponca-city';
import { pryor_ok_DynamicData } from './cities/oklahoma/pryor';
import { sallisaw_ok_DynamicData } from './cities/oklahoma/sallisaw';
import { sand_springs_ok_DynamicData } from './cities/oklahoma/sand-springs';
import { sapulpa_ok_DynamicData } from './cities/oklahoma/sapulpa';
import { seminole_ok_DynamicData } from './cities/oklahoma/seminole';
import { shawnee_ok_DynamicData } from './cities/oklahoma/shawnee';
import { stillwater_ok_DynamicData } from './cities/oklahoma/stillwater';
import { tahlequah_ok_DynamicData } from './cities/oklahoma/tahlequah';
import { the_village_ok_DynamicData } from './cities/oklahoma/the-village';
import { tulsa_ok_DynamicData } from './cities/oklahoma/tulsa';
import { vinita_ok_DynamicData } from './cities/oklahoma/vinita';
import { wewoka_ok_DynamicData } from './cities/oklahoma/wewoka';
import { woodward_ok_DynamicData } from './cities/oklahoma/woodward';
import { albany_or_DynamicData } from './cities/oregon/albany';
import { ashland_or_DynamicData } from './cities/oregon/ashland';
import { astoria_or_DynamicData } from './cities/oregon/astoria';
import { baker_city_or_DynamicData } from './cities/oregon/baker-city';
import { beaverton_or_DynamicData } from './cities/oregon/beaverton';
import { bend_or_DynamicData } from './cities/oregon/bend';
import { brookings_or_DynamicData } from './cities/oregon/brookings';
import { burns_or_DynamicData } from './cities/oregon/burns';
import { coos_bay_or_DynamicData } from './cities/oregon/coos-bay';
import { corvallis_or_DynamicData } from './cities/oregon/corvallis';
import { eugene_or_DynamicData } from './cities/oregon/eugene';
import { grants_pass_or_DynamicData } from './cities/oregon/grants-pass';
import { hillsboro_or_DynamicData } from './cities/oregon/hillsboro';
import { hood_river_or_DynamicData } from './cities/oregon/hood-river';
import { jacksonville_or_DynamicData } from './cities/oregon/jacksonville';
import { john_day_or_DynamicData } from './cities/oregon/john-day';
import { klamath_falls_or_DynamicData } from './cities/oregon/klamath-falls';
import { la_grande_or_DynamicData } from './cities/oregon/la-grande';
import { lake_oswego_or_DynamicData } from './cities/oregon/lake-oswego';
import { lakeview_or_DynamicData } from './cities/oregon/lakeview';
import { mcminnville_or_DynamicData } from './cities/oregon/mcminnville';
import { medford_or_DynamicData } from './cities/oregon/medford';
import { newberg_or_DynamicData } from './cities/oregon/newberg';
import { newport_or_DynamicData } from './cities/oregon/newport';
import { ontario_or_DynamicData } from './cities/oregon/ontario';
import { oregon_city_or_DynamicData } from './cities/oregon/oregon-city';
import { pendleton_or_DynamicData } from './cities/oregon/pendleton';
import { port_orford_or_DynamicData } from './cities/oregon/port-orford';
import { portland_or_DynamicData } from './cities/oregon/portland';
import { prineville_or_DynamicData } from './cities/oregon/prineville';
import { redmond_or_DynamicData } from './cities/oregon/redmond';
import { reedsport_or_DynamicData } from './cities/oregon/reedsport';
import { roseburg_or_DynamicData } from './cities/oregon/roseburg';
import { salem_or_DynamicData } from './cities/oregon/salem';
import { seaside_or_DynamicData } from './cities/oregon/seaside';
import { springfield_or_DynamicData } from './cities/oregon/springfield';
import { thedalles_or_DynamicData } from './cities/oregon/the-dalles';
import { tillamook_or_DynamicData } from './cities/oregon/tillamook';
import { abington_pa_DynamicData } from './cities/pennsylvania/abington';
import { aliquippa_pa_DynamicData } from './cities/pennsylvania/aliquippa';
import { allentown_pa_DynamicData } from './cities/pennsylvania/allentown';
import { altoona_pa_DynamicData } from './cities/pennsylvania/altoona';
import { ambridge_pa_DynamicData } from './cities/pennsylvania/ambridge';
import { bedford_pa_DynamicData } from './cities/pennsylvania/bedford';
import { bethlehem_pa_DynamicData } from './cities/pennsylvania/bethlehem';
import { bloomsburg_pa_DynamicData } from './cities/pennsylvania/bloomsburg';
import { bradford_pa_DynamicData } from './cities/pennsylvania/bradford';
import { bristol_pa_DynamicData } from './cities/pennsylvania/bristol';
import { carbondale_pa_DynamicData } from './cities/pennsylvania/carbondale';
import { carlisle_pa_DynamicData } from './cities/pennsylvania/carlisle';
import { chambersburg_pa_DynamicData } from './cities/pennsylvania/chambersburg';
import { chester_pa_DynamicData } from './cities/pennsylvania/chester';
import { columbia_pa_DynamicData } from './cities/pennsylvania/columbia';
import { easton_pa_DynamicData } from './cities/pennsylvania/easton';
import { erie_pa_DynamicData } from './cities/pennsylvania/erie';
import { franklin_pa_DynamicData } from './cities/pennsylvania/franklin';
import { germantown_pa_DynamicData } from './cities/pennsylvania/germantown';
import { gettysburg_pa_DynamicData } from './cities/pennsylvania/gettysburg';
import { greensburg_pa_DynamicData } from './cities/pennsylvania/greensburg';
import { hanover_pa_DynamicData } from './cities/pennsylvania/hanover';
import { harmony_pa_DynamicData } from './cities/pennsylvania/harmony';
import { harrisburg_pa_DynamicData } from './cities/pennsylvania/harrisburg';
import { hazleton_pa_DynamicData } from './cities/pennsylvania/hazleton';
import { hershey_pa_DynamicData } from './cities/pennsylvania/hershey';
import { homestead_pa_DynamicData } from './cities/pennsylvania/homestead';
import { honesdale_pa_DynamicData } from './cities/pennsylvania/honesdale';
import { indiana_pa_DynamicData } from './cities/pennsylvania/indiana';
import { jeannette_pa_DynamicData } from './cities/pennsylvania/jeannette';
import { jim_thorpe_pa_DynamicData } from './cities/pennsylvania/jim-thorpe';
import { johnstown_pa_DynamicData } from './cities/pennsylvania/johnstown';
import { lancaster_pa_DynamicData } from './cities/pennsylvania/lancaster';
import { lebanon_pa_DynamicData } from './cities/pennsylvania/lebanon';
import { levittown_pa_DynamicData } from './cities/pennsylvania/levittown';
import { lewistown_pa_DynamicData } from './cities/pennsylvania/lewistown';
import { lock_haven_pa_DynamicData } from './cities/pennsylvania/lock-haven';
import { lower_southampton_pa_DynamicData } from './cities/pennsylvania/lower-southampton';
import { mckeesport_pa_DynamicData } from './cities/pennsylvania/mckeesport';
import { meadville_pa_DynamicData } from './cities/pennsylvania/meadville';
import { middletown_pa_DynamicData } from './cities/pennsylvania/middletown';
import { monroeville_pa_DynamicData } from './cities/pennsylvania/monroeville';
import { nanticoke_pa_DynamicData } from './cities/pennsylvania/nanticoke';
import { new_castle_pa_DynamicData } from './cities/pennsylvania/new-castle';
import { new_hope_pa_DynamicData } from './cities/pennsylvania/new-hope';
import { new_kensington_pa_DynamicData } from './cities/pennsylvania/new-kensington';
import { norristown_pa_DynamicData } from './cities/pennsylvania/norristown';
import { oil_city_pa_DynamicData } from './cities/pennsylvania/oil-city';
import { philadelphia_pa_DynamicData } from './cities/pennsylvania/philadelphia';
import { phoenixville_pa_DynamicData } from './cities/pennsylvania/phoenixville';
import { pittsburgh_pa_DynamicData } from './cities/pennsylvania/pittsburgh';
import { pottstown_pa_DynamicData } from './cities/pennsylvania/pottstown';
import { pottsville_pa_DynamicData } from './cities/pennsylvania/pottsville';
import { reading_pa_DynamicData } from './cities/pennsylvania/reading';
import { scranton_pa_DynamicData } from './cities/pennsylvania/scranton';
import { shamokin_pa_DynamicData } from './cities/pennsylvania/shamokin';
import { sharon_pa_DynamicData } from './cities/pennsylvania/sharon';
import { state_college_pa_DynamicData } from './cities/pennsylvania/state-college';
import { stroudsburg_pa_DynamicData } from './cities/pennsylvania/stroudsburg';
import { sunbury_pa_DynamicData } from './cities/pennsylvania/sunbury';
import { swarthmore_pa_DynamicData } from './cities/pennsylvania/swarthmore';
import { tamaqua_pa_DynamicData } from './cities/pennsylvania/tamaqua';
import { titusville_pa_DynamicData } from './cities/pennsylvania/titusville';
import { uniontown_pa_DynamicData } from './cities/pennsylvania/uniontown';
import { warren_pa_DynamicData } from './cities/pennsylvania/warren';
import { washington_pa_DynamicData } from './cities/pennsylvania/washington';
import { west_chester_pa_DynamicData } from './cities/pennsylvania/west-chester';
import { wilkes_barre_pa_DynamicData } from './cities/pennsylvania/wilkes-barre';
import { williamsport_pa_DynamicData } from './cities/pennsylvania/williamsport';
import { york_pa_DynamicData } from './cities/pennsylvania/york';
import { barrington_ri_DynamicData } from './cities/rhode_island/barrington';
import { bristol_ri_DynamicData } from './cities/rhode_island/bristol';
import { central_falls_ri_DynamicData } from './cities/rhode_island/central-falls';
import { cranston_ri_DynamicData } from './cities/rhode_island/cranston';
import { east_greenwich_ri_DynamicData } from './cities/rhode_island/east-greenwich';
import { east_providence_ri_DynamicData } from './cities/rhode_island/east-providence';
import { kingston_ri_DynamicData } from './cities/rhode_island/kingston';
import { middletown_ri_DynamicData } from './cities/rhode_island/middletown';
import { narragansett_ri_DynamicData } from './cities/rhode_island/narragansett';
import { newport_ri_DynamicData } from './cities/rhode_island/newport';
import { north_kingstown_ri_DynamicData } from './cities/rhode_island/north-kingstown';
import { pawtucket_ri_DynamicData } from './cities/rhode_island/pawtucket';
import { portsmouth_ri_DynamicData } from './cities/rhode_island/portsmouth';
import { providence_ri_DynamicData } from './cities/rhode_island/providence';
import { south_kingstown_ri_DynamicData } from './cities/rhode_island/south-kingstown';
import { tiverton_ri_DynamicData } from './cities/rhode_island/tiverton';
import { warren_ri_DynamicData } from './cities/rhode_island/warren';
import { warwick_ri_DynamicData } from './cities/rhode_island/warwick';
import { westerly_ri_DynamicData } from './cities/rhode_island/westerly';
import { wickford_ri_DynamicData } from './cities/rhode_island/wickford';
import { woonsocket_ri_DynamicData } from './cities/rhode_island/woonsocket';
import { abbeville_sc_DynamicData } from './cities/south_carolina/abbeville';
import { aiken_sc_DynamicData } from './cities/south_carolina/aiken';
import { anderson_sc_DynamicData } from './cities/south_carolina/anderson';
import { beaufort_sc_DynamicData } from './cities/south_carolina/beaufort';
import { camden_sc_DynamicData } from './cities/south_carolina/camden';
import { charleston_sc_DynamicData } from './cities/south_carolina/charleston';
import { columbia_sc_DynamicData } from './cities/south_carolina/columbia';
import { darlington_sc_DynamicData } from './cities/south_carolina/darlington';
import { florence_sc_DynamicData } from './cities/south_carolina/florence';
import { gaffney_sc_DynamicData } from './cities/south_carolina/gaffney';
import { georgetown_sc_DynamicData } from './cities/south_carolina/georgetown';
import { greenville_sc_DynamicData } from './cities/south_carolina/greenville';
import { greenwood_sc_DynamicData } from './cities/south_carolina/greenwood';
import { hartsville_sc_DynamicData } from './cities/south_carolina/hartsville';
import { lancaster_sc_DynamicData } from './cities/south_carolina/lancaster';
import { mount_pleasant_sc_DynamicData } from './cities/south_carolina/mount-pleasant';
import { myrtle_beach_sc_DynamicData } from './cities/south_carolina/myrtle-beach';
import { orangeburg_sc_DynamicData } from './cities/south_carolina/orangeburg';
import { rock_hill_sc_DynamicData } from './cities/south_carolina/rock-hill';
import { spartanburg_sc_DynamicData } from './cities/south_carolina/spartanburg';
import { sumter_sc_DynamicData } from './cities/south_carolina/sumter';
import { union_sc_DynamicData } from './cities/south_carolina/union';
import { aberdeen_sd_DynamicData } from './cities/south_dakota/aberdeen';
import { belle_fourche_sd_DynamicData } from './cities/south_dakota/belle-fourche';
import { brookings_sd_DynamicData } from './cities/south_dakota/brookings';
import { canton_sd_DynamicData } from './cities/south_dakota/canton';
import { custer_sd_DynamicData } from './cities/south_dakota/custer';
import { de_smet_sd_DynamicData } from './cities/south_dakota/de-smet';
import { deadwood_sd_DynamicData } from './cities/south_dakota/deadwood';
import { hot_springs_sd_DynamicData } from './cities/south_dakota/hot-springs';
import { huron_sd_DynamicData } from './cities/south_dakota/huron';
import { lead_sd_DynamicData } from './cities/south_dakota/lead';
import { madison_sd_DynamicData } from './cities/south_dakota/madison';
import { milbank_sd_DynamicData } from './cities/south_dakota/milbank';
import { mitchell_sd_DynamicData } from './cities/south_dakota/mitchell';
import { mobridge_sd_DynamicData } from './cities/south_dakota/mobridge';
import { pierre_sd_DynamicData } from './cities/south_dakota/pierre';
import { rapid_city_sd_DynamicData } from './cities/south_dakota/rapid-city';
import { sioux_falls_sd_DynamicData } from './cities/south_dakota/sioux-falls';
import { spearfish_sd_DynamicData } from './cities/south_dakota/spearfish';
import { sturgis_sd_DynamicData } from './cities/south_dakota/sturgis';
import { vermillion_sd_DynamicData } from './cities/south_dakota/vermillion';
import { watertown_sd_DynamicData } from './cities/south_dakota/watertown';
import { yankton_sd_DynamicData } from './cities/south_dakota/yankton';
import { alcoa_tn_DynamicData } from './cities/tennessee/alcoa';
import { athens_tn_DynamicData } from './cities/tennessee/athens';
import { chattanooga_tn_DynamicData } from './cities/tennessee/chattanooga';
import { clarksville_tn_DynamicData } from './cities/tennessee/clarksville';
import { cleveland_tn_DynamicData } from './cities/tennessee/cleveland';
import { columbia_tn_DynamicData } from './cities/tennessee/columbia';
import { cookeville_tn_DynamicData } from './cities/tennessee/cookeville';
import { dayton_tn_DynamicData } from './cities/tennessee/dayton';
import { elizabethton_tn_DynamicData } from './cities/tennessee/elizabethton';
import { franklin_tn_DynamicData } from './cities/tennessee/franklin';
import { gallatin_tn_DynamicData } from './cities/tennessee/gallatin';
import { gatlinburg_tn_DynamicData } from './cities/tennessee/gatlinburg';
import { greeneville_tn_DynamicData } from './cities/tennessee/greeneville';
import { jackson_tn_DynamicData } from './cities/tennessee/jackson';
import { johnson_city_tn_DynamicData } from './cities/tennessee/johnson-city';
import { jonesborough_tn_DynamicData } from './cities/tennessee/jonesborough';
import { kingsport_tn_DynamicData } from './cities/tennessee/kingsport';
import { knoxville_tn_DynamicData } from './cities/tennessee/knoxville';
import { lebanon_tn_DynamicData } from './cities/tennessee/lebanon';
import { maryville_tn_DynamicData } from './cities/tennessee/maryville';
import { memphis_tn_DynamicData } from './cities/tennessee/memphis';
import { morristown_tn_DynamicData } from './cities/tennessee/morristown';
import { murfreesboro_tn_DynamicData } from './cities/tennessee/murfreesboro';
import { nashville_tn_DynamicData } from './cities/tennessee/nashville';
import { norris_tn_DynamicData } from './cities/tennessee/norris';
import { oak_ridge_tn_DynamicData } from './cities/tennessee/oak-ridge';
import { shelbyville_tn_DynamicData } from './cities/tennessee/shelbyville';
import { tullahoma_tn_DynamicData } from './cities/tennessee/tullahoma';
import { abilene_tx_DynamicData } from './cities/texas/abilene';
import { alpine_tx_DynamicData } from './cities/texas/alpine';
import { amarillo_tx_DynamicData } from './cities/texas/amarillo';
import { arlington_tx_DynamicData } from './cities/texas/arlington';
import { austin_tx_DynamicData } from './cities/texas/austin';
import { baytown_tx_DynamicData } from './cities/texas/baytown';
import { beaumont_tx_DynamicData } from './cities/texas/beaumont';
import { big_spring_tx_DynamicData } from './cities/texas/big-spring';
import { borger_tx_DynamicData } from './cities/texas/borger';
import { brownsville_tx_DynamicData } from './cities/texas/brownsville';
import { bryan_tx_DynamicData } from './cities/texas/bryan';
import { canyon_tx_DynamicData } from './cities/texas/canyon';
import { cleburne_tx_DynamicData } from './cities/texas/cleburne';
import { college_station_tx_DynamicData } from './cities/texas/college-station';
import { corpus_christi_tx_DynamicData } from './cities/texas/corpus-christi';
import { crystal_city_tx_DynamicData } from './cities/texas/crystal-city';
import { dallas_tx_DynamicData } from './cities/texas/dallas';
import { del_rio_tx_DynamicData } from './cities/texas/del-rio';
import { denison_tx_DynamicData } from './cities/texas/denison';
import { denton_tx_DynamicData } from './cities/texas/denton';
import { eagle_pass_tx_DynamicData } from './cities/texas/eagle-pass';
import { edinburg_tx_DynamicData } from './cities/texas/edinburg';
import { el_paso_tx_DynamicData } from './cities/texas/el-paso';
import { fort_worth_tx_DynamicData } from './cities/texas/fort-worth';
import { freeport_tx_DynamicData } from './cities/texas/freeport';
import { galveston_tx_DynamicData } from './cities/texas/galveston';
import { garland_tx_DynamicData } from './cities/texas/garland';
import { goliad_tx_DynamicData } from './cities/texas/goliad';
import { greenville_tx_DynamicData } from './cities/texas/greenville';
import { harlingen_tx_DynamicData } from './cities/texas/harlingen';
import { houston_tx_DynamicData } from './cities/texas/houston';
import { huntsville_tx_DynamicData } from './cities/texas/huntsville';
import { irving_tx_DynamicData } from './cities/texas/irving';
import { johnson_city_tx_DynamicData } from './cities/texas/johnson-city';
import { kilgore_tx_DynamicData } from './cities/texas/kilgore';
import { killeen_tx_DynamicData } from './cities/texas/killeen';
import { kingsville_tx_DynamicData } from './cities/texas/kingsville';
import { laredo_tx_DynamicData } from './cities/texas/laredo';
import { longview_tx_DynamicData } from './cities/texas/longview';
import { lubbock_tx_DynamicData } from './cities/texas/lubbock';
import { lufkin_tx_DynamicData } from './cities/texas/lufkin';
import { marshall_tx_DynamicData } from './cities/texas/marshall';
import { mcallen_tx_DynamicData } from './cities/texas/mcallen';
import { mckinney_tx_DynamicData } from './cities/texas/mckinney';
import { mesquite_tx_DynamicData } from './cities/texas/mesquite';
import { midland_tx_DynamicData } from './cities/texas/midland';
import { mission_tx_DynamicData } from './cities/texas/mission';
import { nacogdoches_tx_DynamicData } from './cities/texas/nacogdoches';
import { new_braunfels_tx_DynamicData } from './cities/texas/new-braunfels';
import { odessa_tx_DynamicData } from './cities/texas/odessa';
import { orange_tx_DynamicData } from './cities/texas/orange';
import { pampa_tx_DynamicData } from './cities/texas/pampa';
import { paris_tx_DynamicData } from './cities/texas/paris';
import { pasadena_tx_DynamicData } from './cities/texas/pasadena';
import { pecos_tx_DynamicData } from './cities/texas/pecos';
import { pharr_tx_DynamicData } from './cities/texas/pharr';
import { plainview_tx_DynamicData } from './cities/texas/plainview';
import { plano_tx_DynamicData } from './cities/texas/plano';
import { port_arthur_tx_DynamicData } from './cities/texas/port-arthur';
import { port_lavaca_tx_DynamicData } from './cities/texas/port-lavaca';
import { richardson_tx_DynamicData } from './cities/texas/richardson';
import { san_angelo_tx_DynamicData } from './cities/texas/san-angelo';
import { san_antonio_tx_DynamicData } from './cities/texas/san-antonio';
import { san_felipe_tx_DynamicData } from './cities/texas/san-felipe';
import { san_marcos_tx_DynamicData } from './cities/texas/san-marcos';
import { sherman_tx_DynamicData } from './cities/texas/sherman';
import { sweetwater_tx_DynamicData } from './cities/texas/sweetwater';
import { temple_tx_DynamicData } from './cities/texas/temple';
import { texarkana_tx_DynamicData } from './cities/texas/texarkana';
import { texas_city_tx_DynamicData } from './cities/texas/texas-city';
import { tyler_tx_DynamicData } from './cities/texas/tyler';
import { uvalde_tx_DynamicData } from './cities/texas/uvalde';
import { victoria_tx_DynamicData } from './cities/texas/victoria';
import { waco_tx_DynamicData } from './cities/texas/waco';
import { weatherford_tx_DynamicData } from './cities/texas/weatherford';
import { wichita_falls_tx_DynamicData } from './cities/texas/wichita-falls';
import { ysleta_tx_DynamicData } from './cities/texas/ysleta';
import { alta_ut_DynamicData } from './cities/utah/alta';
import { american_fork_ut_DynamicData } from './cities/utah/american-fork';
import { bountiful_ut_DynamicData } from './cities/utah/bountiful';
import { brigham_city_ut_DynamicData } from './cities/utah/brigham-city';
import { cedar_city_ut_DynamicData } from './cities/utah/cedar-city';
import { clearfield_ut_DynamicData } from './cities/utah/clearfield';
import { delta_ut_DynamicData } from './cities/utah/delta';
import { fillmore_ut_DynamicData } from './cities/utah/fillmore';
import { green_river_ut_DynamicData } from './cities/utah/green-river';
import { heber_city_ut_DynamicData } from './cities/utah/heber-city';
import { kanab_ut_DynamicData } from './cities/utah/kanab';
import { layton_ut_DynamicData } from './cities/utah/layton';
import { lehi_ut_DynamicData } from './cities/utah/lehi';
import { logan_ut_DynamicData } from './cities/utah/logan';
import { manti_ut_DynamicData } from './cities/utah/manti';
import { moab_ut_DynamicData } from './cities/utah/moab';
import { monticello_ut_DynamicData } from './cities/utah/monticello';
import { murray_ut_DynamicData } from './cities/utah/murray';
import { nephi_ut_DynamicData } from './cities/utah/nephi';
import { ogden_ut_DynamicData } from './cities/utah/ogden';
import { orderville_ut_DynamicData } from './cities/utah/orderville';
import { orem_ut_DynamicData } from './cities/utah/orem';
import { panguitch_ut_DynamicData } from './cities/utah/panguitch';
import { park_city_ut_DynamicData } from './cities/utah/park-city';
import { payson_ut_DynamicData } from './cities/utah/payson';
import { price_ut_DynamicData } from './cities/utah/price';
import { provo_ut_DynamicData } from './cities/utah/provo';
import { saint_george_ut_DynamicData } from './cities/utah/saint-george';
import { salt_lake_city_ut_DynamicData } from './cities/utah/salt-lake-city';
import { spanish_fork_ut_DynamicData } from './cities/utah/spanish-fork';
import { springville_ut_DynamicData } from './cities/utah/springville';
import { tooele_ut_DynamicData } from './cities/utah/tooele';
import { vernal_ut_DynamicData } from './cities/utah/vernal';
import { barre_vt_DynamicData } from './cities/vermont/barre';
import { bellows_falls_vt_DynamicData } from './cities/vermont/bellows-falls';
import { bennington_vt_DynamicData } from './cities/vermont/bennington';
import { brattleboro_vt_DynamicData } from './cities/vermont/brattleboro';
import { burlington_vt_DynamicData } from './cities/vermont/burlington';
import { essex_vt_DynamicData } from './cities/vermont/essex';
import { manchester_vt_DynamicData } from './cities/vermont/manchester';
import { middlebury_vt_DynamicData } from './cities/vermont/middlebury';
import { montpelier_vt_DynamicData } from './cities/vermont/montpelier';
import { newport_vt_DynamicData } from './cities/vermont/newport';
import { plymouth_vt_DynamicData } from './cities/vermont/plymouth';
import { rutland_vt_DynamicData } from './cities/vermont/rutland';
import { saint_albans_vt_DynamicData } from './cities/vermont/saint-albans';
import { saint_johnsbury_vt_DynamicData } from './cities/vermont/saint-johnsbury';
import { sharon_vt_DynamicData } from './cities/vermont/sharon';
import { winooski_vt_DynamicData } from './cities/vermont/winooski';
import { abingdon_va_DynamicData } from './cities/virginia/abingdon';
import { alexandria_va_DynamicData } from './cities/virginia/alexandria';
import { bristol_va_DynamicData } from './cities/virginia/bristol';
import { charlottesville_va_DynamicData } from './cities/virginia/charlottesville';
import { chesapeake_va_DynamicData } from './cities/virginia/chesapeake';
import { danville_va_DynamicData } from './cities/virginia/danville';
import { fairfax_va_DynamicData } from './cities/virginia/fairfax';
import { falls_church_va_DynamicData } from './cities/virginia/falls-church';
import { fredericksburg_va_DynamicData } from './cities/virginia/fredericksburg';
import { hampton_va_DynamicData } from './cities/virginia/hampton';
import { hanover_va_DynamicData } from './cities/virginia/hanover';
import { hopewell_va_DynamicData } from './cities/virginia/hopewell';
import { lexington_va_DynamicData } from './cities/virginia/lexington';
import { lynchburg_va_DynamicData } from './cities/virginia/lynchburg';
import { manassas_va_DynamicData } from './cities/virginia/manassas';
import { martinsville_va_DynamicData } from './cities/virginia/martinsville';
import { new_market_va_DynamicData } from './cities/virginia/new-market';
import { newport_news_va_DynamicData } from './cities/virginia/newport-news';
import { norfolk_va_DynamicData } from './cities/virginia/norfolk';
import { petersburg_va_DynamicData } from './cities/virginia/petersburg';
import { portsmouth_va_DynamicData } from './cities/virginia/portsmouth';
import { reston_va_DynamicData } from './cities/virginia/reston';
import { richmond_va_DynamicData } from './cities/virginia/richmond';
import { roanoke_va_DynamicData } from './cities/virginia/roanoke';
import { staunton_va_DynamicData } from './cities/virginia/staunton';
import { suffolk_va_DynamicData } from './cities/virginia/suffolk';
import { virginia_beach_va_DynamicData } from './cities/virginia/virginia-beach';
import { waynesboro_va_DynamicData } from './cities/virginia/waynesboro';
import { williamsburg_va_DynamicData } from './cities/virginia/williamsburg';
import { winchester_va_DynamicData } from './cities/virginia/winchester';
import { aberdeen_wa_DynamicData } from './cities/washington/aberdeen';
import { anacortes_wa_DynamicData } from './cities/washington/anacortes';
import { auburn_wa_DynamicData } from './cities/washington/auburn';
import { bellevue_wa_DynamicData } from './cities/washington/bellevue';
import { bellingham_wa_DynamicData } from './cities/washington/bellingham';
import { bremerton_wa_DynamicData } from './cities/washington/bremerton';
import { centralia_wa_DynamicData } from './cities/washington/centralia';
import { coulee_dam_wa_DynamicData } from './cities/washington/coulee-dam';
import { coupeville_wa_DynamicData } from './cities/washington/coupeville';
import { ellensburg_wa_DynamicData } from './cities/washington/ellensburg';
import { ephrata_wa_DynamicData } from './cities/washington/ephrata';
import { everett_wa_DynamicData } from './cities/washington/everett';
import { hoquiam_wa_DynamicData } from './cities/washington/hoquiam';
import { kelso_wa_DynamicData } from './cities/washington/kelso';
import { kennewick_wa_DynamicData } from './cities/washington/kennewick';
import { longview_wa_DynamicData } from './cities/washington/longview';
import { moses_lake_wa_DynamicData } from './cities/washington/moses-lake';
import { oak_harbor_wa_DynamicData } from './cities/washington/oak-harbor';
import { olympia_wa_DynamicData } from './cities/washington/olympia';
import { pasco_wa_DynamicData } from './cities/washington/pasco';
import { point_roberts_wa_DynamicData } from './cities/washington/point-roberts';
import { port_angeles_wa_DynamicData } from './cities/washington/port-angeles';
import { pullman_wa_DynamicData } from './cities/washington/pullman';
import { puyallup_wa_DynamicData } from './cities/washington/puyallup';
import { redmond_wa_DynamicData } from './cities/washington/redmond';
import { renton_wa_DynamicData } from './cities/washington/renton';
import { richland_wa_DynamicData } from './cities/washington/richland';
import { seattle_wa_DynamicData } from './cities/washington/seattle';
import { spokane_wa_DynamicData } from './cities/washington/spokane';
import { tacoma_wa_DynamicData } from './cities/washington/tacoma';
import { vancouver_wa_DynamicData } from './cities/washington/vancouver';
import { walla_walla_wa_DynamicData } from './cities/washington/walla-walla';
import { wenatchee_wa_DynamicData } from './cities/washington/wenatchee';
import { yakima_wa_DynamicData } from './cities/washington/yakima';
import { bath_wv_DynamicData } from './cities/west_virginia/bath';
import { beckley_wv_DynamicData } from './cities/west_virginia/beckley';
import { bluefield_wv_DynamicData } from './cities/west_virginia/bluefield';
import { buckhannon_wv_DynamicData } from './cities/west_virginia/buckhannon';
import { charles_town_wv_DynamicData } from './cities/west_virginia/charles-town';
import { charleston_wv_DynamicData } from './cities/west_virginia/charleston';
import { clarksburg_wv_DynamicData } from './cities/west_virginia/clarksburg';
import { elkins_wv_DynamicData } from './cities/west_virginia/elkins';
import { fairmont_wv_DynamicData } from './cities/west_virginia/fairmont';
import { grafton_wv_DynamicData } from './cities/west_virginia/grafton';
import { harpers_ferry_wv_DynamicData } from './cities/west_virginia/harpers-ferry';
import { hillsboro_wv_DynamicData } from './cities/west_virginia/hillsboro';
import { hinton_wv_DynamicData } from './cities/west_virginia/hinton';
import { huntington_wv_DynamicData } from './cities/west_virginia/huntington';
import { keyser_wv_DynamicData } from './cities/west_virginia/keyser';
import { lewisburg_wv_DynamicData } from './cities/west_virginia/lewisburg';
import { logan_wv_DynamicData } from './cities/west_virginia/logan';
import { martinsburg_wv_DynamicData } from './cities/west_virginia/martinsburg';
import { morgantown_wv_DynamicData } from './cities/west_virginia/morgantown';
import { moundsville_wv_DynamicData } from './cities/west_virginia/moundsville';
import { new_martinsville_wv_DynamicData } from './cities/west_virginia/new-martinsville';
import { parkersburg_wv_DynamicData } from './cities/west_virginia/parkersburg';
import { philippi_wv_DynamicData } from './cities/west_virginia/philippi';
import { point_pleasant_wv_DynamicData } from './cities/west_virginia/point-pleasant';
import { princeton_wv_DynamicData } from './cities/west_virginia/princeton';
import { romney_wv_DynamicData } from './cities/west_virginia/romney';
import { shepherdstown_wv_DynamicData } from './cities/west_virginia/shepherdstown';
import { south_charleston_wv_DynamicData } from './cities/west_virginia/south-charleston';
import { summersville_wv_DynamicData } from './cities/west_virginia/summersville';
import { weirton_wv_DynamicData } from './cities/west_virginia/weirton';
import { welch_wv_DynamicData } from './cities/west_virginia/welch';
import { wellsburg_wv_DynamicData } from './cities/west_virginia/wellsburg';
import { weston_wv_DynamicData } from './cities/west_virginia/weston';
import { wheeling_wv_DynamicData } from './cities/west_virginia/wheeling';
import { white_sulphur_springs_wv_DynamicData } from './cities/west_virginia/white-sulphur-springs';
import { williamson_wv_DynamicData } from './cities/west_virginia/williamson';
import { appleton_wi_DynamicData } from './cities/wisconsin/appleton';
import { ashland_wi_DynamicData } from './cities/wisconsin/ashland';
import { baraboo_wi_DynamicData } from './cities/wisconsin/baraboo';
import { belmont_wi_DynamicData } from './cities/wisconsin/belmont';
import { beloit_wi_DynamicData } from './cities/wisconsin/beloit';
import { eau_claire_wi_DynamicData } from './cities/wisconsin/eau-claire';
import { fonddulac_wi_DynamicData } from './cities/wisconsin/fond-du-lac';
import { green_bay_wi_DynamicData } from './cities/wisconsin/green-bay';
import { hayward_wi_DynamicData } from './cities/wisconsin/hayward';
import { janesville_wi_DynamicData } from './cities/wisconsin/janesville';
import { kenosha_wi_DynamicData } from './cities/wisconsin/kenosha';
import { la_crosse_wi_DynamicData } from './cities/wisconsin/la-crosse';
import { lake_geneva_wi_DynamicData } from './cities/wisconsin/lake-geneva';
import { madison_wi_DynamicData } from './cities/wisconsin/madison';
import { manitowoc_wi_DynamicData } from './cities/wisconsin/manitowoc';
import { marinette_wi_DynamicData } from './cities/wisconsin/marinette';
import { menasha_wi_DynamicData } from './cities/wisconsin/menasha';
import { milwaukee_wi_DynamicData } from './cities/wisconsin/milwaukee';
import { neenah_wi_DynamicData } from './cities/wisconsin/neenah';
import { newglarus_wi_DynamicData } from './cities/wisconsin/new-glarus';
import { oconto_wi_DynamicData } from './cities/wisconsin/oconto';
import { oshkosh_wi_DynamicData } from './cities/wisconsin/oshkosh';
import { peshtigo_wi_DynamicData } from './cities/wisconsin/peshtigo';
import { portage_wi_DynamicData } from './cities/wisconsin/portage';
import { prairie_du_chien_wi_DynamicData } from './cities/wisconsin/prairie-du-chien';
import { racine_wi_DynamicData } from './cities/wisconsin/racine';
import { rhinelander_wi_DynamicData } from './cities/wisconsin/rhinelander';
import { ripon_wi_DynamicData } from './cities/wisconsin/ripon';
import { sheboygan_wi_DynamicData } from './cities/wisconsin/sheboygan';
import { spring_green_wi_DynamicData } from './cities/wisconsin/spring-green';
import { stevens_point_wi_DynamicData } from './cities/wisconsin/stevens-point';
import { sturgeon_bay_wi_DynamicData } from './cities/wisconsin/sturgeon-bay';
import { superior_wi_DynamicData } from './cities/wisconsin/superior';
import { waukesha_wi_DynamicData } from './cities/wisconsin/waukesha';
import { wausau_wi_DynamicData } from './cities/wisconsin/wausau';
import { wauwatosa_wi_DynamicData } from './cities/wisconsin/wauwatosa';
import { west_allis_wi_DynamicData } from './cities/wisconsin/west-allis';
import { west_bend_wi_DynamicData } from './cities/wisconsin/west-bend';
import { wisconsin_dells_wi_DynamicData } from './cities/wisconsin/wisconsin-dells';
import { buffalo_wy_DynamicData } from './cities/wyoming/buffalo';
import { casper_wy_DynamicData } from './cities/wyoming/casper';
import { cheyenne_wy_DynamicData } from './cities/wyoming/cheyenne';
import { cody_wy_DynamicData } from './cities/wyoming/cody';
import { douglas_wy_DynamicData } from './cities/wyoming/douglas';
import { evanston_wy_DynamicData } from './cities/wyoming/evanston';
import { gillette_wy_DynamicData } from './cities/wyoming/gillette';
import { green_river_wy_DynamicData } from './cities/wyoming/green-river';
import { jackson_wy_DynamicData } from './cities/wyoming/jackson';
import { lander_wy_DynamicData } from './cities/wyoming/lander';
import { laramie_wy_DynamicData } from './cities/wyoming/laramie';
import { newcastle_wy_DynamicData } from './cities/wyoming/newcastle';
import { powell_wy_DynamicData } from './cities/wyoming/powell';
import { rawlins_wy_DynamicData } from './cities/wyoming/rawlins';
import { riverton_wy_DynamicData } from './cities/wyoming/riverton';
import { rock_springs_wy_DynamicData } from './cities/wyoming/rock-springs';
import { sheridan_wy_DynamicData } from './cities/wyoming/sheridan';
import { ten_sleep_wy_DynamicData } from './cities/wyoming/ten-sleep';
import { thermopolis_wy_DynamicData } from './cities/wyoming/thermopolis';
import { torrington_wy_DynamicData } from './cities/wyoming/torrington';
import { worland_wy_DynamicData } from './cities/wyoming/worland';

// Dynamic states registry
const STATES_DYNAMIC_REGISTRY: { [state: string]: StateDynamicData } = {
  'alabama': alabamaDynamicData,
  'alaska': alaskaDynamicData,
  'arizona': arizonaDynamicData,
  'arkansas': arkansasDynamicData,
  'california': californiaDynamicData,
  'colorado': coloradoDynamicData,
  'connecticut': connecticutDynamicData,
  'delaware': delawareDynamicData,
  'florida': floridaDynamicData,
  'georgia': georgiaDynamicData,
  'hawaii': hawaiiDynamicData,
  'idaho': idahoDynamicData,
  'illinois': illinoisDynamicData,
  'indiana': indianaDynamicData,
  'iowa': iowaDynamicData,
  'kansas': kansasDynamicData,
  'kentucky': kentuckyDynamicData,
  'louisiana': louisianaDynamicData,
  'maine': maineDynamicData,
  'maryland': marylandDynamicData,
  'massachusetts': massachusettsDynamicData,
  'michigan': michiganDynamicData,
  'minnesota': minnesotaDynamicData,
  'mississippi': mississippiDynamicData,
  'missouri': missouriDynamicData,
  'montana': montanaDynamicData,
  'nebraska': nebraskaDynamicData,
  'nevada': nevadaDynamicData,
  'new-hampshire': newhampshireDynamicData,
  'new-jersey': newjerseyDynamicData,
  'new-mexico': newmexicoDynamicData,
  'new-york': newyorkDynamicData,
  'north-carolina': northcarolinaDynamicData,
  'north-dakota': northdakotaDynamicData,
  'ohio': ohioDynamicData,
  'oklahoma': oklahomaDynamicData,
  'oregon': oregonDynamicData,
  'pennsylvania': pennsylvaniaDynamicData,
  'rhode-island': rhodeislandDynamicData,
  'south-carolina': southcarolinaDynamicData,
  'south-dakota': southdakotaDynamicData,
  'tennessee': tennesseeDynamicData,
  'texas': texasDynamicData,
  'utah': utahDynamicData,
  'vermont': vermontDynamicData,
  'virginia': virginiaDynamicData,
  'washington': washingtonDynamicData,
  'west-virginia': west_virginiaDynamicData,
  'wisconsin': wisconsinDynamicData,
  'wyoming': wyomingDynamicData,
};

// Dynamic cities registry
const CITIES_DYNAMIC_REGISTRY: { [state: string]: { [city: string]: CityDynamicData } } = {
  alabama: {
    'alexandercity': alexandercity_al_DynamicData,
    'andalusia': andalusia_al_DynamicData,
    'anniston': anniston_al_DynamicData,
    'athens': athens_al_DynamicData,
    'atmore': atmore_al_DynamicData,
    'auburn': auburn_al_DynamicData,
    'bessemer': bessemer_al_DynamicData,
    'birmingham': birmingham_al_DynamicData,
    'chickasaw': chickasaw_al_DynamicData,
    'clanton': clanton_al_DynamicData,
    'cullman': cullman_al_DynamicData,
    'decatur': decatur_al_DynamicData,
    'demopolis': demopolis_al_DynamicData,
    'dothan': dothan_al_DynamicData,
    'enterprise': enterprise_al_DynamicData,
    'eufaula': eufaula_al_DynamicData,
    'florence': florence_al_DynamicData,
    'fort-payne': fort_payne_al_DynamicData,
    'gadsden': gadsden_al_DynamicData,
    'greenville': greenville_al_DynamicData,
    'guntersville': guntersville_al_DynamicData,
    'huntsville': huntsville_al_DynamicData,
    'jasper': jasper_al_DynamicData,
    'marion': marion_al_DynamicData,
    'mobile': mobile_al_DynamicData,
    'montgomery': montgomery_al_DynamicData,
    'opelika': opelika_al_DynamicData,
    'ozark': ozark_al_DynamicData,
    'phenix-city': phenix_city_al_DynamicData,
    'prichard': prichard_al_DynamicData,
    'scottsboro': scottsboro_al_DynamicData,
    'selma': selma_al_DynamicData,
    'sheffield': sheffield_al_DynamicData,
    'sylacauga': sylacauga_al_DynamicData,
    'talladega': talladega_al_DynamicData,
    'troy': troy_al_DynamicData,
    'tuscaloosa': tuscaloosa_al_DynamicData,
    'tuscumbia': tuscumbia_al_DynamicData,
    'tuskegee': tuskegee_al_DynamicData,
  },
  alaska: {
    'anchorage': anchorage_ak_DynamicData,
    'cordova': cordova_ak_DynamicData,
    'fairbanks': fairbanks_ak_DynamicData,
    'haines': haines_ak_DynamicData,
    'homer': homer_ak_DynamicData,
    'juneau': juneau_ak_DynamicData,
    'ketchikan': ketchikan_ak_DynamicData,
    'kodiak': kodiak_ak_DynamicData,
    'kotzebue': kotzebue_ak_DynamicData,
    'nome': nome_ak_DynamicData,
    'palmer': palmer_ak_DynamicData,
    'seward': seward_ak_DynamicData,
    'sitka': sitka_ak_DynamicData,
    'skagway': skagway_ak_DynamicData,
    'valdez': valdez_ak_DynamicData,
  },
  arizona: {
    'ajo': ajo_az_DynamicData,
    'avondale': avondale_az_DynamicData,
    'bisbee': bisbee_az_DynamicData,
    'casa-grande': casa_grande_az_DynamicData,
    'chandler': chandler_az_DynamicData,
    'clifton': clifton_az_DynamicData,
    'douglas': douglas_az_DynamicData,
    'flagstaff': flagstaff_az_DynamicData,
    'florence': florence_az_DynamicData,
    'gila-bend': gila_bend_az_DynamicData,
    'glendale': glendale_az_DynamicData,
    'globe': globe_az_DynamicData,
    'kingman': kingman_az_DynamicData,
    'lake-havasu-city': lake_havasu_city_az_DynamicData,
    'mesa': mesa_az_DynamicData,
    'nogales': nogales_az_DynamicData,
    'oraibi': oraibi_az_DynamicData,
    'phoenix': phoenix_az_DynamicData,
    'prescott': prescott_az_DynamicData,
    'scottsdale': scottsdale_az_DynamicData,
    'sierra-vista': sierra_vista_az_DynamicData,
    'tempe': tempe_az_DynamicData,
    'tombstone': tombstone_az_DynamicData,
    'tucson': tucson_az_DynamicData,
    'walpi': walpi_az_DynamicData,
    'window-rock': window_rock_az_DynamicData,
    'winslow': winslow_az_DynamicData,
    'yuma': yuma_az_DynamicData,
  },
  arkansas: {
    'arkadelphia': arkadelphia_ar_DynamicData,
    'arkansas-post': arkansas_post_ar_DynamicData,
    'batesville': batesville_ar_DynamicData,
    'benton': benton_ar_DynamicData,
    'blytheville': blytheville_ar_DynamicData,
    'camden': camden_ar_DynamicData,
    'conway': conway_ar_DynamicData,
    'crossett': crossett_ar_DynamicData,
    'el-dorado': el_dorado_ar_DynamicData,
    'fayetteville': fayetteville_ar_DynamicData,
    'forrest-city': forrest_city_ar_DynamicData,
    'fort-smith': fort_smith_ar_DynamicData,
    'harrison': harrison_ar_DynamicData,
    'helena': helena_ar_DynamicData,
    'hope': hope_ar_DynamicData,
    'hot-springs': hot_springs_ar_DynamicData,
    'jacksonville': jacksonville_ar_DynamicData,
    'jonesboro': jonesboro_ar_DynamicData,
    'little-rock': little_rock_ar_DynamicData,
    'magnolia': magnolia_ar_DynamicData,
    'morrilton': morrilton_ar_DynamicData,
    'newport': newport_ar_DynamicData,
    'north-little-rock': north_little_rock_ar_DynamicData,
    'osceola': osceola_ar_DynamicData,
    'pine-bluff': pine_bluff_ar_DynamicData,
    'rogers': rogers_ar_DynamicData,
    'searcy': searcy_ar_DynamicData,
    'stuttgart': stuttgart_ar_DynamicData,
    'vanburen': vanburen_ar_DynamicData,
    'west-memphis': west_memphis_ar_DynamicData,
  },
  california: {
    'alameda': alameda_ca_DynamicData,
    'alhambra': alhambra_ca_DynamicData,
    'anaheim': anaheim_ca_DynamicData,
    'antioch': antioch_ca_DynamicData,
    'arcadia': arcadia_ca_DynamicData,
    'bakersfield': bakersfield_ca_DynamicData,
    'barstow': barstow_ca_DynamicData,
    'belmont': belmont_ca_DynamicData,
    'berkeley': berkeley_ca_DynamicData,
    'beverly-hills': beverly_hills_ca_DynamicData,
    'brea': brea_ca_DynamicData,
    'buena-park': buena_park_ca_DynamicData,
    'burbank': burbank_ca_DynamicData,
    'calexico': calexico_ca_DynamicData,
    'calistoga': calistoga_ca_DynamicData,
    'carlsbad': carlsbad_ca_DynamicData,
    'carmel': carmel_ca_DynamicData,
    'chico': chico_ca_DynamicData,
    'chulavista': chulavista_ca_DynamicData,
    'claremont': claremont_ca_DynamicData,
    'compton': compton_ca_DynamicData,
    'concord': concord_ca_DynamicData,
    'corona': corona_ca_DynamicData,
    'coronado': coronado_ca_DynamicData,
    'costa-mesa': costa_mesa_ca_DynamicData,
    'culver-city': culver_city_ca_DynamicData,
    'daly-city': daly_city_ca_DynamicData,
    'davis': davis_ca_DynamicData,
    'downey': downey_ca_DynamicData,
    'el-centro': el_centro_ca_DynamicData,
    'el-cerrito': el_cerrito_ca_DynamicData,
    'el-monte': el_monte_ca_DynamicData,
    'escondido': escondido_ca_DynamicData,
    'eureka': eureka_ca_DynamicData,
    'fairfield': fairfield_ca_DynamicData,
    'fontana': fontana_ca_DynamicData,
    'fremont': fremont_ca_DynamicData,
    'fresno': fresno_ca_DynamicData,
    'fullerton': fullerton_ca_DynamicData,
    'garden-grove': garden_grove_ca_DynamicData,
    'glendale': glendale_ca_DynamicData,
    'hayward': hayward_ca_DynamicData,
    'hollywood': hollywood_ca_DynamicData,
    'huntington-beach': huntington_beach_ca_DynamicData,
    'indio': indio_ca_DynamicData,
    'inglewood': inglewood_ca_DynamicData,
    'irvine': irvine_ca_DynamicData,
    'la-habra': la_habra_ca_DynamicData,
    'laguna-beach': laguna_beach_ca_DynamicData,
    'lancaster': lancaster_ca_DynamicData,
    'livermore': livermore_ca_DynamicData,
    'lodi': lodi_ca_DynamicData,
    'lompoc': lompoc_ca_DynamicData,
    'long-beach': long_beach_ca_DynamicData,
    'los-angeles': los_angeles_ca_DynamicData,
    'malibu': malibu_ca_DynamicData,
    'martinez': martinez_ca_DynamicData,
    'marysville': marysville_ca_DynamicData,
    'menlo-park': menlo_park_ca_DynamicData,
    'merced': merced_ca_DynamicData,
    'modesto': modesto_ca_DynamicData,
    'monterey': monterey_ca_DynamicData,
    'mountain-view': mountain_view_ca_DynamicData,
    'napa': napa_ca_DynamicData,
    'needles': needles_ca_DynamicData,
    'newport-beach': newport_beach_ca_DynamicData,
    'norwalk': norwalk_ca_DynamicData,
    'novato': novato_ca_DynamicData,
    'oakland': oakland_ca_DynamicData,
    'oceanside': oceanside_ca_DynamicData,
    'ojai': ojai_ca_DynamicData,
    'ontario': ontario_ca_DynamicData,
    'orange': orange_ca_DynamicData,
    'oroville': oroville_ca_DynamicData,
    'oxnard': oxnard_ca_DynamicData,
    'pacific-grove': pacific_grove_ca_DynamicData,
    'palm-springs': palm_springs_ca_DynamicData,
    'palmdale': palmdale_ca_DynamicData,
    'palo-alto': palo_alto_ca_DynamicData,
    'pasadena': pasadena_ca_DynamicData,
    'petaluma': petaluma_ca_DynamicData,
    'pomona': pomona_ca_DynamicData,
    'port-hueneme': port_hueneme_ca_DynamicData,
    'rancho-cucamonga': rancho_cucamonga_ca_DynamicData,
    'red-bluff': red_bluff_ca_DynamicData,
    'redding': redding_ca_DynamicData,
    'redlands': redlands_ca_DynamicData,
    'redondo-beach': redondo_beach_ca_DynamicData,
    'redwood-city': redwood_city_ca_DynamicData,
    'richmond': richmond_ca_DynamicData,
    'riverside': riverside_ca_DynamicData,
    'roseville': roseville_ca_DynamicData,
    'sacramento': sacramento_ca_DynamicData,
    'salinas': salinas_ca_DynamicData,
    'san-bernardino': san_bernardino_ca_DynamicData,
    'san-clemente': san_clemente_ca_DynamicData,
    'san-diego': san_diego_ca_DynamicData,
    'san-fernando': san_fernando_ca_DynamicData,
    'san-francisco': san_francisco_ca_DynamicData,
    'san-gabriel': san_gabriel_ca_DynamicData,
    'san-jose': san_jose_ca_DynamicData,
    'san-juan-capistrano': san_juan_capistrano_ca_DynamicData,
    'san-leandro': san_leandro_ca_DynamicData,
    'san-luis-obispo': san_luis_obispo_ca_DynamicData,
    'san-marino': san_marino_ca_DynamicData,
    'san-mateo': san_mateo_ca_DynamicData,
    'san-pedro': san_pedro_ca_DynamicData,
    'san-rafael': san_rafael_ca_DynamicData,
    'san-simeon': san_simeon_ca_DynamicData,
    'santa-ana': santa_ana_ca_DynamicData,
    'santa-barbara': santa_barbara_ca_DynamicData,
    'santa-clara': santa_clara_ca_DynamicData,
    'santa-clarita': santa_clarita_ca_DynamicData,
    'santa-cruz': santa_cruz_ca_DynamicData,
    'santa-monica': santa_monica_ca_DynamicData,
    'santa-rosa': santa_rosa_ca_DynamicData,
    'sausalito': sausalito_ca_DynamicData,
    'simi-valley': simi_valley_ca_DynamicData,
    'sonoma': sonoma_ca_DynamicData,
    'south-san-francisco': south_san_francisco_ca_DynamicData,
    'stockton': stockton_ca_DynamicData,
    'sunnyvale': sunnyvale_ca_DynamicData,
    'susanville': susanville_ca_DynamicData,
    'thousand-oaks': thousand_oaks_ca_DynamicData,
    'torrance': torrance_ca_DynamicData,
    'turlock': turlock_ca_DynamicData,
    'ukiah': ukiah_ca_DynamicData,
    'vallejo': vallejo_ca_DynamicData,
    'ventura': ventura_ca_DynamicData,
    'victorville': victorville_ca_DynamicData,
    'visalia': visalia_ca_DynamicData,
    'walnut-creek': walnut_creek_ca_DynamicData,
    'watts': watts_ca_DynamicData,
    'west-covina': west_covina_ca_DynamicData,
    'whittier': whittier_ca_DynamicData,
    'woodland': woodland_ca_DynamicData,
    'yorba-linda': yorba_linda_ca_DynamicData,
    'yuba-city': yuba_city_ca_DynamicData,
  },
  colorado: {
    'alamosa': alamosa_co_DynamicData,
    'aspen': aspen_co_DynamicData,
    'aurora': aurora_co_DynamicData,
    'boulder': boulder_co_DynamicData,
    'breckenridge': breckenridge_co_DynamicData,
    'brighton': brighton_co_DynamicData,
    'canon-city': canon_city_co_DynamicData,
    'central-city': central_city_co_DynamicData,
    'climax': climax_co_DynamicData,
    'colorado-springs': colorado_springs_co_DynamicData,
    'cortez': cortez_co_DynamicData,
    'cripple-creek': cripple_creek_co_DynamicData,
    'denver': denver_co_DynamicData,
    'durango': durango_co_DynamicData,
    'englewood': englewood_co_DynamicData,
    'estes-park': estes_park_co_DynamicData,
    'fort-collins': fort_collins_co_DynamicData,
    'fort-morgan': fort_morgan_co_DynamicData,
    'georgetown': georgetown_co_DynamicData,
    'glenwood-springs': glenwood_springs_co_DynamicData,
    'golden': golden_co_DynamicData,
    'grand-junction': grand_junction_co_DynamicData,
    'greeley': greeley_co_DynamicData,
    'gunnison': gunnison_co_DynamicData,
    'la-junta': la_junta_co_DynamicData,
    'leadville': leadville_co_DynamicData,
    'littleton': littleton_co_DynamicData,
    'longmont': longmont_co_DynamicData,
    'loveland': loveland_co_DynamicData,
    'montrose': montrose_co_DynamicData,
    'ouray': ouray_co_DynamicData,
    'pagosa-springs': pagosa_springs_co_DynamicData,
    'pueblo': pueblo_co_DynamicData,
    'silverton': silverton_co_DynamicData,
    'steamboat-springs': steamboat_springs_co_DynamicData,
    'sterling': sterling_co_DynamicData,
    'telluride': telluride_co_DynamicData,
    'trinidad': trinidad_co_DynamicData,
    'vail': vail_co_DynamicData,
    'walsenburg': walsenburg_co_DynamicData,
    'westminster': westminster_co_DynamicData,
  },
  connecticut: {
    'ansonia': ansonia_ct_DynamicData,
    'berlin': berlin_ct_DynamicData,
    'bloomfield': bloomfield_ct_DynamicData,
    'branford': branford_ct_DynamicData,
    'bridgeport': bridgeport_ct_DynamicData,
    'bristol': bristol_ct_DynamicData,
    'coventry': coventry_ct_DynamicData,
    'danbury': danbury_ct_DynamicData,
    'darien': darien_ct_DynamicData,
    'derby': derby_ct_DynamicData,
    'east-hartford': east_hartford_ct_DynamicData,
    'east-haven': east_haven_ct_DynamicData,
    'enfield': enfield_ct_DynamicData,
    'fairfield': fairfield_ct_DynamicData,
    'farmington': farmington_ct_DynamicData,
    'greenwich': greenwich_ct_DynamicData,
    'groton': groton_ct_DynamicData,
    'guilford': guilford_ct_DynamicData,
    'hamden': hamden_ct_DynamicData,
    'hartford': hartford_ct_DynamicData,
    'lebanon': lebanon_ct_DynamicData,
    'litchfield': litchfield_ct_DynamicData,
    'manchester': manchester_ct_DynamicData,
    'mansfield': mansfield_ct_DynamicData,
    'meriden': meriden_ct_DynamicData,
    'middletown': middletown_ct_DynamicData,
    'milford': milford_ct_DynamicData,
    'mystic': mystic_ct_DynamicData,
    'naugatuck': naugatuck_ct_DynamicData,
    'new-britain': new_britain_ct_DynamicData,
    'new-haven': new_haven_ct_DynamicData,
    'new-london': new_london_ct_DynamicData,
    'north-haven': north_haven_ct_DynamicData,
    'norwalk': norwalk_ct_DynamicData,
    'norwich': norwich_ct_DynamicData,
    'old-saybrook': old_saybrook_ct_DynamicData,
    'orange': orange_ct_DynamicData,
    'seymour': seymour_ct_DynamicData,
    'shelton': shelton_ct_DynamicData,
    'simsbury': simsbury_ct_DynamicData,
    'southington': southington_ct_DynamicData,
    'stamford': stamford_ct_DynamicData,
    'stonington': stonington_ct_DynamicData,
    'stratford': stratford_ct_DynamicData,
    'torrington': torrington_ct_DynamicData,
    'wallingford': wallingford_ct_DynamicData,
    'waterbury': waterbury_ct_DynamicData,
    'waterford': waterford_ct_DynamicData,
    'watertown': watertown_ct_DynamicData,
    'west-hartford': west_hartford_ct_DynamicData,
    'west-haven': west_haven_ct_DynamicData,
    'westport': westport_ct_DynamicData,
    'wethersfield': wethersfield_ct_DynamicData,
    'willimantic': willimantic_ct_DynamicData,
    'windham': windham_ct_DynamicData,
    'windsorlocks': windsorlocks_ct_DynamicData,
    'windsor': windsor_ct_DynamicData,
    'winsted': winsted_ct_DynamicData,
  },
  delaware: {
    'dover': dover_de_DynamicData,
    'lewes': lewes_de_DynamicData,
    'milford': milford_de_DynamicData,
    'new-castle': new_castle_de_DynamicData,
    'newark': newark_de_DynamicData,
    'smyrna': smyrna_de_DynamicData,
    'wilmington': wilmington_de_DynamicData,
  },
  florida: {
    'apalachicola': apalachicola_fl_DynamicData,
    'bartow': bartow_fl_DynamicData,
    'belle-glade': belle_glade_fl_DynamicData,
    'boca-raton': boca_raton_fl_DynamicData,
    'bradenton': bradenton_fl_DynamicData,
    'cape-coral': cape_coral_fl_DynamicData,
    'clearwater': clearwater_fl_DynamicData,
    'cocoa-beach': cocoa_beach_fl_DynamicData,
    'cocoa-rockledge': cocoa_rockledge_fl_DynamicData,
    'coral-gables': coral_gables_fl_DynamicData,
    'daytona-beach': daytona_beach_fl_DynamicData,
    'de-land': de_land_fl_DynamicData,
    'deerfield-beach': deerfield_beach_fl_DynamicData,
    'delray-beach': delray_beach_fl_DynamicData,
    'fernandina-beach': fernandina_beach_fl_DynamicData,
    'fort-lauderdale': fort_lauderdale_fl_DynamicData,
    'fort-myers': fort_myers_fl_DynamicData,
    'fort-pierce': fort_pierce_fl_DynamicData,
    'fort-walton-beach': fort_walton_beach_fl_DynamicData,
    'gainesville': gainesville_fl_DynamicData,
    'hallandale-beach': hallandale_beach_fl_DynamicData,
    'hialeah': hialeah_fl_DynamicData,
    'hollywood': hollywood_fl_DynamicData,
    'homestead': homestead_fl_DynamicData,
    'jacksonville': jacksonville_fl_DynamicData,
    'key-west': key_west_fl_DynamicData,
    'lake-city': lake_city_fl_DynamicData,
    'lake-wales': lake_wales_fl_DynamicData,
    'lakeland': lakeland_fl_DynamicData,
    'largo': largo_fl_DynamicData,
    'melbourne': melbourne_fl_DynamicData,
    'miami-beach': miami_beach_fl_DynamicData,
    'miami': miami_fl_DynamicData,
    'naples': naples_fl_DynamicData,
    'new-smyrna-beach': new_smyrna_beach_fl_DynamicData,
    'ocala': ocala_fl_DynamicData,
    'orlando': orlando_fl_DynamicData,
    'ormond-beach': ormond_beach_fl_DynamicData,
    'palatka': palatka_fl_DynamicData,
    'palm-bay': palm_bay_fl_DynamicData,
    'palm-beach': palm_beach_fl_DynamicData,
    'panama-city': panama_city_fl_DynamicData,
    'pensacola': pensacola_fl_DynamicData,
    'pompano-beach': pompano_beach_fl_DynamicData,
    'saint-augustine': saint_augustine_fl_DynamicData,
    'saint-petersburg': saint_petersburg_fl_DynamicData,
    'sanford': sanford_fl_DynamicData,
    'sarasota': sarasota_fl_DynamicData,
    'sebring': sebring_fl_DynamicData,
    'tallahassee': tallahassee_fl_DynamicData,
    'tampa': tampa_fl_DynamicData,
    'tarpon-springs': tarpon_springs_fl_DynamicData,
    'titusville': titusville_fl_DynamicData,
    'venice': venice_fl_DynamicData,
    'west-palm-beach': west_palm_beach_fl_DynamicData,
    'white-springs': white_springs_fl_DynamicData,
    'winter-haven': winter_haven_fl_DynamicData,
    'winter-park': winter_park_fl_DynamicData,
  },
  georgia: {
    'albany': albany_ga_DynamicData,
    'americus': americus_ga_DynamicData,
    'andersonville': andersonville_ga_DynamicData,
    'athens': athens_ga_DynamicData,
    'atlanta': atlanta_ga_DynamicData,
    'augusta': augusta_ga_DynamicData,
    'bainbridge': bainbridge_ga_DynamicData,
    'blairsville': blairsville_ga_DynamicData,
    'brunswick': brunswick_ga_DynamicData,
    'calhoun': calhoun_ga_DynamicData,
    'carrollton': carrollton_ga_DynamicData,
    'columbus': columbus_ga_DynamicData,
    'dahlonega': dahlonega_ga_DynamicData,
    'dalton': dalton_ga_DynamicData,
    'darien': darien_ga_DynamicData,
    'decatur': decatur_ga_DynamicData,
    'douglas': douglas_ga_DynamicData,
    'east-point': east_point_ga_DynamicData,
    'fitzgerald': fitzgerald_ga_DynamicData,
    'fort-valley': fort_valley_ga_DynamicData,
    'gainesville': gainesville_ga_DynamicData,
    'lagrange': lagrange_ga_DynamicData,
    'macon': macon_ga_DynamicData,
    'marietta': marietta_ga_DynamicData,
    'milledgeville': milledgeville_ga_DynamicData,
    'plains': plains_ga_DynamicData,
    'rome': rome_ga_DynamicData,
    'savannah': savannah_ga_DynamicData,
    'toccoa': toccoa_ga_DynamicData,
    'valdosta': valdosta_ga_DynamicData,
    'warm-springs': warm_springs_ga_DynamicData,
    'warner-robins': warner_robins_ga_DynamicData,
    'washington': washington_ga_DynamicData,
    'waycross': waycross_ga_DynamicData,
  },
  hawaii: {
    'hanalei': hanalei_hi_DynamicData,
    'hilo': hilo_hi_DynamicData,
    'honaunau': honaunau_hi_DynamicData,
    'honolulu': honolulu_hi_DynamicData,
    'kahului': kahului_hi_DynamicData,
    'kaneohe': kaneohe_hi_DynamicData,
    'kapaa': kapaa_hi_DynamicData,
    'kawaihae': kawaihae_hi_DynamicData,
    'lahaina': lahaina_hi_DynamicData,
    'laie': laie_hi_DynamicData,
    'wahiawa': wahiawa_hi_DynamicData,
    'wailuku': wailuku_hi_DynamicData,
    'waimea': waimea_hi_DynamicData,
  },
  idaho: {
    'blackfoot': blackfoot_id_DynamicData,
    'boise': boise_id_DynamicData,
    'bonners-ferry': bonners_ferry_id_DynamicData,
    'caldwell': caldwell_id_DynamicData,
    'coeur-d-alene': coeur_d_alene_id_DynamicData,
    'idaho-city': idaho_city_id_DynamicData,
    'idaho-falls': idaho_falls_id_DynamicData,
    'kellogg': kellogg_id_DynamicData,
    'lewiston': lewiston_id_DynamicData,
    'moscow': moscow_id_DynamicData,
    'nampa': nampa_id_DynamicData,
    'pocatello': pocatello_id_DynamicData,
    'priest-river': priest_river_id_DynamicData,
    'rexburg': rexburg_id_DynamicData,
    'sun-valley': sun_valley_id_DynamicData,
    'twin-falls': twin_falls_id_DynamicData,
  },
  illinois: {
    'alton': alton_il_DynamicData,
    'arlington-heights': arlington_heights_il_DynamicData,
    'arthur': arthur_il_DynamicData,
    'aurora': aurora_il_DynamicData,
    'belleville': belleville_il_DynamicData,
    'belvidere': belvidere_il_DynamicData,
    'bloomington': bloomington_il_DynamicData,
    'brookfield': brookfield_il_DynamicData,
    'cahokia': cahokia_il_DynamicData,
    'cairo': cairo_il_DynamicData,
    'calumet-city': calumet_city_il_DynamicData,
    'canton': canton_il_DynamicData,
    'carbondale': carbondale_il_DynamicData,
    'carlinville': carlinville_il_DynamicData,
    'carthage': carthage_il_DynamicData,
    'centralia': centralia_il_DynamicData,
    'champaign': champaign_il_DynamicData,
    'charleston': charleston_il_DynamicData,
    'chester': chester_il_DynamicData,
    'chicago-heights': chicago_heights_il_DynamicData,
    'chicago': chicago_il_DynamicData,
    'cicero': cicero_il_DynamicData,
    'collinsville': collinsville_il_DynamicData,
    'danville': danville_il_DynamicData,
    'decatur': decatur_il_DynamicData,
    'dekalb': dekalb_il_DynamicData,
    'des-plaines': des_plaines_il_DynamicData,
    'dixon': dixon_il_DynamicData,
    'east-moline': east_moline_il_DynamicData,
    'east-saint-louis': east_saint_louis_il_DynamicData,
    'effingham': effingham_il_DynamicData,
    'elgin': elgin_il_DynamicData,
    'elmhurst': elmhurst_il_DynamicData,
    'evanston': evanston_il_DynamicData,
    'freeport': freeport_il_DynamicData,
    'galena': galena_il_DynamicData,
    'galesburg': galesburg_il_DynamicData,
    'glen-ellyn': glen_ellyn_il_DynamicData,
    'glenview': glenview_il_DynamicData,
    'granite-city': granite_city_il_DynamicData,
    'harrisburg': harrisburg_il_DynamicData,
    'herrin': herrin_il_DynamicData,
    'highland-park': highland_park_il_DynamicData,
    'jacksonville': jacksonville_il_DynamicData,
    'joliet': joliet_il_DynamicData,
    'kankakee': kankakee_il_DynamicData,
    'kaskaskia': kaskaskia_il_DynamicData,
    'kewanee': kewanee_il_DynamicData,
    'la-salle': la_salle_il_DynamicData,
    'lake-forest': lake_forest_il_DynamicData,
    'libertyville': libertyville_il_DynamicData,
    'lincoln': lincoln_il_DynamicData,
    'lisle': lisle_il_DynamicData,
    'lombard': lombard_il_DynamicData,
    'macomb': macomb_il_DynamicData,
    'mattoon': mattoon_il_DynamicData,
    'moline': moline_il_DynamicData,
    'monmouth': monmouth_il_DynamicData,
    'mount-vernon': mount_vernon_il_DynamicData,
    'mundelein': mundelein_il_DynamicData,
    'naperville': naperville_il_DynamicData,
    'nauvoo': nauvoo_il_DynamicData,
    'normal': normal_il_DynamicData,
    'north-chicago': north_chicago_il_DynamicData,
    'oak-park': oak_park_il_DynamicData,
    'oregon': oregon_il_DynamicData,
    'ottawa': ottawa_il_DynamicData,
    'palatine': palatine_il_DynamicData,
    'park-forest': park_forest_il_DynamicData,
    'park-ridge': park_ridge_il_DynamicData,
    'pekin': pekin_il_DynamicData,
    'peoria': peoria_il_DynamicData,
    'petersburg': petersburg_il_DynamicData,
    'pontiac': pontiac_il_DynamicData,
    'quincy': quincy_il_DynamicData,
    'rantoul': rantoul_il_DynamicData,
    'river-forest': river_forest_il_DynamicData,
    'rock-island': rock_island_il_DynamicData,
    'rockford': rockford_il_DynamicData,
    'salem': salem_il_DynamicData,
    'shawneetown': shawneetown_il_DynamicData,
    'skokie': skokie_il_DynamicData,
    'south-holland': south_holland_il_DynamicData,
    'springfield': springfield_il_DynamicData,
    'streator': streator_il_DynamicData,
    'summit': summit_il_DynamicData,
    'urbana': urbana_il_DynamicData,
    'vandalia': vandalia_il_DynamicData,
    'virden': virden_il_DynamicData,
    'waukegan': waukegan_il_DynamicData,
    'wheaton': wheaton_il_DynamicData,
    'wilmette': wilmette_il_DynamicData,
    'winnetka': winnetka_il_DynamicData,
    'wood-river': wood_river_il_DynamicData,
    'zion': zion_il_DynamicData,
  },
  indiana: {
    'anderson': anderson_in_DynamicData,
    'bedford': bedford_in_DynamicData,
    'bloomington': bloomington_in_DynamicData,
    'columbus': columbus_in_DynamicData,
    'connersville': connersville_in_DynamicData,
    'corydon': corydon_in_DynamicData,
    'crawfordsville': crawfordsville_in_DynamicData,
    'east-chicago': east_chicago_in_DynamicData,
    'elkhart': elkhart_in_DynamicData,
    'elwood': elwood_in_DynamicData,
    'evansville': evansville_in_DynamicData,
    'fort-wayne': fort_wayne_in_DynamicData,
    'french-lick': french_lick_in_DynamicData,
    'gary': gary_in_DynamicData,
    'geneva': geneva_in_DynamicData,
    'goshen': goshen_in_DynamicData,
    'greenfield': greenfield_in_DynamicData,
    'hammond': hammond_in_DynamicData,
    'hobart': hobart_in_DynamicData,
    'huntington': huntington_in_DynamicData,
    'indianapolis': indianapolis_in_DynamicData,
    'jeffersonville': jeffersonville_in_DynamicData,
    'kokomo': kokomo_in_DynamicData,
    'lafayette': lafayette_in_DynamicData,
    'madison': madison_in_DynamicData,
    'marion': marion_in_DynamicData,
    'michigan-city': michigan_city_in_DynamicData,
    'mishawaka': mishawaka_in_DynamicData,
    'muncie': muncie_in_DynamicData,
    'nappanee': nappanee_in_DynamicData,
    'nashville': nashville_in_DynamicData,
    'new-albany': new_albany_in_DynamicData,
    'newcastle': newcastle_in_DynamicData,
    'new-harmony': new_harmony_in_DynamicData,
    'peru': peru_in_DynamicData,
    'plymouth': plymouth_in_DynamicData,
    'richmond': richmond_in_DynamicData,
    'santa-claus': santa_claus_in_DynamicData,
    'shelbyville': shelbyville_in_DynamicData,
    'south-bend': south_bend_in_DynamicData,
    'terre-haute': terre_haute_in_DynamicData,
    'valparaiso': valparaiso_in_DynamicData,
    'vincennes': vincennes_in_DynamicData,
    'wabash': wabash_in_DynamicData,
    'west-lafayette': west_lafayette_in_DynamicData,
  },
  iowa: {
    'amana-colonies': amana_colonies_ia_DynamicData,
    'ames': ames_ia_DynamicData,
    'boone': boone_ia_DynamicData,
    'burlington': burlington_ia_DynamicData,
    'cedar-falls': cedar_falls_ia_DynamicData,
    'cedar-rapids': cedar_rapids_ia_DynamicData,
    'charles-city': charles_city_ia_DynamicData,
    'cherokee': cherokee_ia_DynamicData,
    'clinton': clinton_ia_DynamicData,
    'council-bluffs': council_bluffs_ia_DynamicData,
    'davenport': davenport_ia_DynamicData,
    'des-moines': des_moines_ia_DynamicData,
    'dubuque': dubuque_ia_DynamicData,
    'estherville': estherville_ia_DynamicData,
    'fairfield': fairfield_ia_DynamicData,
    'fort-dodge': fort_dodge_ia_DynamicData,
    'grinnell': grinnell_ia_DynamicData,
    'indianola': indianola_ia_DynamicData,
    'iowa-city': iowa_city_ia_DynamicData,
    'keokuk': keokuk_ia_DynamicData,
    'mason-city': mason_city_ia_DynamicData,
    'mount-pleasant': mount_pleasant_ia_DynamicData,
    'muscatine': muscatine_ia_DynamicData,
    'newton': newton_ia_DynamicData,
    'oskaloosa': oskaloosa_ia_DynamicData,
    'ottumwa': ottumwa_ia_DynamicData,
    'sioux-city': sioux_city_ia_DynamicData,
    'waterloo': waterloo_ia_DynamicData,
    'webster-city': webster_city_ia_DynamicData,
    'west-des-moines': west_des_moines_ia_DynamicData,
  },
  kansas: {
    'abilene': abilene_ks_DynamicData,
    'arkansas-city': arkansas_city_ks_DynamicData,
    'atchison': atchison_ks_DynamicData,
    'chanute': chanute_ks_DynamicData,
    'coffeyville': coffeyville_ks_DynamicData,
    'councilgrove': councilgrove_ks_DynamicData,
    'dodge-city': dodge_city_ks_DynamicData,
    'emporia': emporia_ks_DynamicData,
    'fortscott': fortscott_ks_DynamicData,
    'garden-city': garden_city_ks_DynamicData,
    'great-bend': great_bend_ks_DynamicData,
    'hays': hays_ks_DynamicData,
    'hutchinson': hutchinson_ks_DynamicData,
    'independence': independence_ks_DynamicData,
    'junction-city': junction_city_ks_DynamicData,
    'kansas-city': kansas_city_ks_DynamicData,
    'lawrence': lawrence_ks_DynamicData,
    'leavenworth': leavenworth_ks_DynamicData,
    'liberal': liberal_ks_DynamicData,
    'manhattan': manhattan_ks_DynamicData,
    'mcpherson': mcpherson_ks_DynamicData,
    'medicine-lodge': medicine_lodge_ks_DynamicData,
    'newton': newton_ks_DynamicData,
    'olathe': olathe_ks_DynamicData,
    'osawatomie': osawatomie_ks_DynamicData,
    'ottawa': ottawa_ks_DynamicData,
    'overland-park': overland_park_ks_DynamicData,
    'pittsburg': pittsburg_ks_DynamicData,
    'salina': salina_ks_DynamicData,
    'shawnee': shawnee_ks_DynamicData,
    'smithcenter': smithcenter_ks_DynamicData,
    'topeka': topeka_ks_DynamicData,
    'wichita': wichita_ks_DynamicData,
  },
  kentucky: {
    'ashland': ashland_ky_DynamicData,
    'barbourville': barbourville_ky_DynamicData,
    'bardstown': bardstown_ky_DynamicData,
    'berea': berea_ky_DynamicData,
    'boonesborough': boonesborough_ky_DynamicData,
    'bowling-green': bowling_green_ky_DynamicData,
    'campbellsville': campbellsville_ky_DynamicData,
    'covington': covington_ky_DynamicData,
    'danville': danville_ky_DynamicData,
    'elizabethtown': elizabethtown_ky_DynamicData,
    'frankfort': frankfort_ky_DynamicData,
    'harlan': harlan_ky_DynamicData,
    'harrodsburg': harrodsburg_ky_DynamicData,
    'hazard': hazard_ky_DynamicData,
    'henderson': henderson_ky_DynamicData,
    'hodgenville': hodgenville_ky_DynamicData,
    'hopkinsville': hopkinsville_ky_DynamicData,
    'lexington': lexington_ky_DynamicData,
    'louisville': louisville_ky_DynamicData,
    'mayfield': mayfield_ky_DynamicData,
    'maysville': maysville_ky_DynamicData,
    'middlesboro': middlesboro_ky_DynamicData,
    'newport': newport_ky_DynamicData,
    'owensboro': owensboro_ky_DynamicData,
    'paducah': paducah_ky_DynamicData,
    'paris': paris_ky_DynamicData,
    'richmond': richmond_ky_DynamicData,
  },
  louisiana: {
    'abbeville': abbeville_la_DynamicData,
    'alexandria': alexandria_la_DynamicData,
    'bastrop': bastrop_la_DynamicData,
    'baton-rouge': baton_rouge_la_DynamicData,
    'bogalusa': bogalusa_la_DynamicData,
    'bossier-city': bossier_city_la_DynamicData,
    'gretna': gretna_la_DynamicData,
    'houma': houma_la_DynamicData,
    'lafayette': lafayette_la_DynamicData,
    'lake-charles': lake_charles_la_DynamicData,
    'monroe': monroe_la_DynamicData,
    'morgan-city': morgan_city_la_DynamicData,
    'natchitoches': natchitoches_la_DynamicData,
    'new-iberia': new_iberia_la_DynamicData,
    'new-orleans': new_orleans_la_DynamicData,
    'opelousas': opelousas_la_DynamicData,
    'ruston': ruston_la_DynamicData,
    'saint-martinville': saint_martinville_la_DynamicData,
    'shreveport': shreveport_la_DynamicData,
    'thibodaux': thibodaux_la_DynamicData,
  },
  maine: {
    'auburn': auburn_me_DynamicData,
    'augusta': augusta_me_DynamicData,
    'bangor': bangor_me_DynamicData,
    'bar-harbor': bar_harbor_me_DynamicData,
    'bath': bath_me_DynamicData,
    'belfast': belfast_me_DynamicData,
    'biddeford': biddeford_me_DynamicData,
    'boothbay-harbor': boothbay_harbor_me_DynamicData,
    'brunswick': brunswick_me_DynamicData,
    'calais': calais_me_DynamicData,
    'caribou': caribou_me_DynamicData,
    'castine': castine_me_DynamicData,
    'eastport': eastport_me_DynamicData,
    'ellsworth': ellsworth_me_DynamicData,
    'farmington': farmington_me_DynamicData,
    'fort-kent': fort_kent_me_DynamicData,
    'gardiner': gardiner_me_DynamicData,
    'houlton': houlton_me_DynamicData,
    'kennebunkport': kennebunkport_me_DynamicData,
    'kittery': kittery_me_DynamicData,
    'lewiston': lewiston_me_DynamicData,
    'lubec': lubec_me_DynamicData,
    'machias': machias_me_DynamicData,
    'orono': orono_me_DynamicData,
    'portland': portland_me_DynamicData,
    'presque-isle': presque_isle_me_DynamicData,
    'rockland': rockland_me_DynamicData,
    'rumford': rumford_me_DynamicData,
    'saco': saco_me_DynamicData,
    'scarborough': scarborough_me_DynamicData,
    'waterville': waterville_me_DynamicData,
    'york': york_me_DynamicData,
  },
  maryland: {
    'aberdeen': aberdeen_md_DynamicData,
    'annapolis': annapolis_md_DynamicData,
    'baltimore': baltimore_md_DynamicData,
    'bethesda-chevy-chase': bethesda_chevy_chase_md_DynamicData,
    'bowie': bowie_md_DynamicData,
    'cambridge': cambridge_md_DynamicData,
    'catonsville': catonsville_md_DynamicData,
    'college-park': college_park_md_DynamicData,
    'columbia': columbia_md_DynamicData,
    'cumberland': cumberland_md_DynamicData,
    'easton': easton_md_DynamicData,
    'elkton': elkton_md_DynamicData,
    'emmitsburg': emmitsburg_md_DynamicData,
    'frederick': frederick_md_DynamicData,
    'greenbelt': greenbelt_md_DynamicData,
    'hagerstown': hagerstown_md_DynamicData,
    'hyattsville': hyattsville_md_DynamicData,
    'laurel': laurel_md_DynamicData,
    'oakland': oakland_md_DynamicData,
    'ocean-city': ocean_city_md_DynamicData,
    'rockville': rockville_md_DynamicData,
    'saint-marys-city': saint_marys_city_md_DynamicData,
    'salisbury': salisbury_md_DynamicData,
    'silver-spring': silver_spring_md_DynamicData,
    'takoma-park': takoma_park_md_DynamicData,
    'towson': towson_md_DynamicData,
    'westminster': westminster_md_DynamicData,
  },
  massachusetts: {
    'abington': abington_ma_DynamicData,
    'adams': adams_ma_DynamicData,
    'amesbury': amesbury_ma_DynamicData,
    'amherst': amherst_ma_DynamicData,
    'andover': andover_ma_DynamicData,
    'arlington': arlington_ma_DynamicData,
    'athol': athol_ma_DynamicData,
    'attleboro': attleboro_ma_DynamicData,
    'barnstable': barnstable_ma_DynamicData,
    'bedford': bedford_ma_DynamicData,
    'beverly': beverly_ma_DynamicData,
    'boston': boston_ma_DynamicData,
    'bourne': bourne_ma_DynamicData,
    'braintree': braintree_ma_DynamicData,
    'brockton': brockton_ma_DynamicData,
    'brookline': brookline_ma_DynamicData,
    'cambridge': cambridge_ma_DynamicData,
    'canton': canton_ma_DynamicData,
    'charlestown': charlestown_ma_DynamicData,
    'chelmsford': chelmsford_ma_DynamicData,
    'chelsea': chelsea_ma_DynamicData,
    'chicopee': chicopee_ma_DynamicData,
    'clinton': clinton_ma_DynamicData,
    'cohasset': cohasset_ma_DynamicData,
    'concord': concord_ma_DynamicData,
    'danvers': danvers_ma_DynamicData,
    'dartmouth': dartmouth_ma_DynamicData,
    'dedham': dedham_ma_DynamicData,
    'dennis': dennis_ma_DynamicData,
    'duxbury': duxbury_ma_DynamicData,
    'eastham': eastham_ma_DynamicData,
    'edgartown': edgartown_ma_DynamicData,
    'everett': everett_ma_DynamicData,
    'fairhaven': fairhaven_ma_DynamicData,
    'fall-river': fall_river_ma_DynamicData,
    'falmouth': falmouth_ma_DynamicData,
    'fitchburg': fitchburg_ma_DynamicData,
    'framingham': framingham_ma_DynamicData,
    'gloucester': gloucester_ma_DynamicData,
    'great-barrington': great_barrington_ma_DynamicData,
    'greenfield': greenfield_ma_DynamicData,
    'groton': groton_ma_DynamicData,
    'harwich': harwich_ma_DynamicData,
    'haverhill': haverhill_ma_DynamicData,
    'hingham': hingham_ma_DynamicData,
    'holyoke': holyoke_ma_DynamicData,
    'hyannis': hyannis_ma_DynamicData,
    'ipswich': ipswich_ma_DynamicData,
    'lawrence': lawrence_ma_DynamicData,
    'lenox': lenox_ma_DynamicData,
    'leominster': leominster_ma_DynamicData,
    'lexington': lexington_ma_DynamicData,
    'lowell': lowell_ma_DynamicData,
    'ludlow': ludlow_ma_DynamicData,
    'lynn': lynn_ma_DynamicData,
    'malden': malden_ma_DynamicData,
    'marblehead': marblehead_ma_DynamicData,
    'marlborough': marlborough_ma_DynamicData,
    'medford': medford_ma_DynamicData,
    'milton': milton_ma_DynamicData,
    'nahant': nahant_ma_DynamicData,
    'natick': natick_ma_DynamicData,
    'new-bedford': new_bedford_ma_DynamicData,
    'newburyport': newburyport_ma_DynamicData,
    'newton': newton_ma_DynamicData,
    'north-adams': north_adams_ma_DynamicData,
    'northampton': northampton_ma_DynamicData,
    'norton': norton_ma_DynamicData,
    'norwood': norwood_ma_DynamicData,
    'peabody': peabody_ma_DynamicData,
    'pittsfield': pittsfield_ma_DynamicData,
    'plymouth': plymouth_ma_DynamicData,
    'provincetown': provincetown_ma_DynamicData,
    'quincy': quincy_ma_DynamicData,
    'randolph': randolph_ma_DynamicData,
    'revere': revere_ma_DynamicData,
    'salem': salem_ma_DynamicData,
    'sandwich': sandwich_ma_DynamicData,
    'saugus': saugus_ma_DynamicData,
    'somerville': somerville_ma_DynamicData,
    'south-hadley': south_hadley_ma_DynamicData,
    'springfield': springfield_ma_DynamicData,
    'stockbridge': stockbridge_ma_DynamicData,
    'stoughton': stoughton_ma_DynamicData,
    'sturbridge': sturbridge_ma_DynamicData,
    'sudbury': sudbury_ma_DynamicData,
    'taunton': taunton_ma_DynamicData,
    'tewksbury': tewksbury_ma_DynamicData,
    'truro': truro_ma_DynamicData,
    'watertown': watertown_ma_DynamicData,
    'webster': webster_ma_DynamicData,
    'wellesley': wellesley_ma_DynamicData,
    'wellfleet': wellfleet_ma_DynamicData,
    'west-bridgewater': west_bridgewater_ma_DynamicData,
    'west-springfield': west_springfield_ma_DynamicData,
    'westfield': westfield_ma_DynamicData,
    'weymouth': weymouth_ma_DynamicData,
    'whitman': whitman_ma_DynamicData,
    'williamstown': williamstown_ma_DynamicData,
    'woburn': woburn_ma_DynamicData,
    'woods-hole': woods_hole_ma_DynamicData,
    'worcester': worcester_ma_DynamicData,
  },
  michigan: {
    'adrian': adrian_mi_DynamicData,
    'alma': alma_mi_DynamicData,
    'ann-arbor': ann_arbor_mi_DynamicData,
    'battle-creek': battle_creek_mi_DynamicData,
    'bay-city': bay_city_mi_DynamicData,
    'benton-harbor': benton_harbor_mi_DynamicData,
    'bloomfieldhills': bloomfieldhills_mi_DynamicData,
    'cadillac': cadillac_mi_DynamicData,
    'charlevoix': charlevoix_mi_DynamicData,
    'cheboygan': cheboygan_mi_DynamicData,
    'dearborn': dearborn_mi_DynamicData,
    'detroit': detroit_mi_DynamicData,
    'east-lansing': east_lansing_mi_DynamicData,
    'eastpointe': eastpointe_mi_DynamicData,
    'ecorse': ecorse_mi_DynamicData,
    'escanaba': escanaba_mi_DynamicData,
    'flint': flint_mi_DynamicData,
    'grand-haven': grand_haven_mi_DynamicData,
    'grand-rapids': grand_rapids_mi_DynamicData,
    'grayling': grayling_mi_DynamicData,
    'grosse-pointe': grosse_pointe_mi_DynamicData,
    'hancock': hancock_mi_DynamicData,
    'highland-park': highland_park_mi_DynamicData,
    'holland': holland_mi_DynamicData,
    'houghton': houghton_mi_DynamicData,
    'interlochen': interlochen_mi_DynamicData,
    'iron-mountain': iron_mountain_mi_DynamicData,
    'ironwood': ironwood_mi_DynamicData,
    'ishpeming': ishpeming_mi_DynamicData,
    'jackson': jackson_mi_DynamicData,
    'kalamazoo': kalamazoo_mi_DynamicData,
    'lansing': lansing_mi_DynamicData,
    'livonia': livonia_mi_DynamicData,
    'ludington': ludington_mi_DynamicData,
    'mackinaw-city': mackinaw_city_mi_DynamicData,
    'manistee': manistee_mi_DynamicData,
    'marquette': marquette_mi_DynamicData,
    'menominee': menominee_mi_DynamicData,
    'midland': midland_mi_DynamicData,
    'monroe': monroe_mi_DynamicData,
    'mount-clemens': mount_clemens_mi_DynamicData,
    'mount-pleasant': mount_pleasant_mi_DynamicData,
    'muskegon': muskegon_mi_DynamicData,
    'niles': niles_mi_DynamicData,
    'petoskey': petoskey_mi_DynamicData,
    'pontiac': pontiac_mi_DynamicData,
    'port-huron': port_huron_mi_DynamicData,
    'royal-oak': royal_oak_mi_DynamicData,
    'saginaw': saginaw_mi_DynamicData,
    'saint-ignace': saint_ignace_mi_DynamicData,
    'saint-joseph': saint_joseph_mi_DynamicData,
    'sault-sainte-marie': sault_sainte_marie_mi_DynamicData,
    'traversecity': traversecity_mi_DynamicData,
    'trenton': trenton_mi_DynamicData,
    'warren': warren_mi_DynamicData,
    'wyandotte': wyandotte_mi_DynamicData,
    'ypsilanti': ypsilanti_mi_DynamicData,
  },
  minnesota: {
    'albert-lea': albert_lea_mn_DynamicData,
    'alexandria': alexandria_mn_DynamicData,
    'austin': austin_mn_DynamicData,
    'bemidji': bemidji_mn_DynamicData,
    'bloomington': bloomington_mn_DynamicData,
    'brainerd': brainerd_mn_DynamicData,
    'crookston': crookston_mn_DynamicData,
    'duluth': duluth_mn_DynamicData,
    'ely': ely_mn_DynamicData,
    'eveleth': eveleth_mn_DynamicData,
    'faribault': faribault_mn_DynamicData,
    'fergus-falls': fergus_falls_mn_DynamicData,
    'hastings': hastings_mn_DynamicData,
    'hibbing': hibbing_mn_DynamicData,
    'international-falls': international_falls_mn_DynamicData,
    'little-falls': little_falls_mn_DynamicData,
    'mankato': mankato_mn_DynamicData,
    'minneapolis': minneapolis_mn_DynamicData,
    'moorhead': moorhead_mn_DynamicData,
    'new-ulm': new_ulm_mn_DynamicData,
    'northfield': northfield_mn_DynamicData,
    'owatonna': owatonna_mn_DynamicData,
    'pipestone': pipestone_mn_DynamicData,
    'redwing': redwing_mn_DynamicData,
    'rochester': rochester_mn_DynamicData,
    'saint-cloud': saint_cloud_mn_DynamicData,
    'saint-paul': saint_paul_mn_DynamicData,
    'sauk-centre': sauk_centre_mn_DynamicData,
    'south-saint-paul': south_saint_paul_mn_DynamicData,
    'stillwater': stillwater_mn_DynamicData,
    'virginia': virginia_mn_DynamicData,
    'willmar': willmar_mn_DynamicData,
    'winona': winona_mn_DynamicData,
  },
  mississippi: {
    'baysaintlouis': baysaintlouis_ms_DynamicData,
    'biloxi': biloxi_ms_DynamicData,
    'canton': canton_ms_DynamicData,
    'clarksdale': clarksdale_ms_DynamicData,
    'columbia': columbia_ms_DynamicData,
    'columbus': columbus_ms_DynamicData,
    'corinth': corinth_ms_DynamicData,
    'greenville': greenville_ms_DynamicData,
    'greenwood': greenwood_ms_DynamicData,
    'grenada': grenada_ms_DynamicData,
    'gulfport': gulfport_ms_DynamicData,
    'hattiesburg': hattiesburg_ms_DynamicData,
    'holly-springs': holly_springs_ms_DynamicData,
    'jackson': jackson_ms_DynamicData,
    'laurel': laurel_ms_DynamicData,
    'meridian': meridian_ms_DynamicData,
    'natchez': natchez_ms_DynamicData,
    'ocean-springs': ocean_springs_ms_DynamicData,
    'oxford': oxford_ms_DynamicData,
    'pascagoula': pascagoula_ms_DynamicData,
    'pass-christian': pass_christian_ms_DynamicData,
    'philadelphia': philadelphia_ms_DynamicData,
    'port-gibson': port_gibson_ms_DynamicData,
    'starkville': starkville_ms_DynamicData,
    'tupelo': tupelo_ms_DynamicData,
    'vicksburg': vicksburg_ms_DynamicData,
    'west-point': west_point_ms_DynamicData,
    'yazoo-city': yazoo_city_ms_DynamicData,
  },
  missouri: {
    'boonville': boonville_mo_DynamicData,
    'branson': branson_mo_DynamicData,
    'capegirardeau': capegirardeau_mo_DynamicData,
    'carthage': carthage_mo_DynamicData,
    'chillicothe': chillicothe_mo_DynamicData,
    'clayton': clayton_mo_DynamicData,
    'columbia': columbia_mo_DynamicData,
    'excelsior-springs': excelsior_springs_mo_DynamicData,
    'ferguson': ferguson_mo_DynamicData,
    'florissant': florissant_mo_DynamicData,
    'fulton': fulton_mo_DynamicData,
    'hannibal': hannibal_mo_DynamicData,
    'independence': independence_mo_DynamicData,
    'jefferson-city': jefferson_city_mo_DynamicData,
    'joplin': joplin_mo_DynamicData,
    'kansas-city': kansas_city_mo_DynamicData,
    'kirksville': kirksville_mo_DynamicData,
    'lamar': lamar_mo_DynamicData,
    'lebanon': lebanon_mo_DynamicData,
    'lexington': lexington_mo_DynamicData,
    'maryville': maryville_mo_DynamicData,
    'mexico': mexico_mo_DynamicData,
    'monett': monett_mo_DynamicData,
    'neosho': neosho_mo_DynamicData,
    'new-madrid': new_madrid_mo_DynamicData,
    'rolla': rolla_mo_DynamicData,
    'saint-charles': saint_charles_mo_DynamicData,
    'saint-joseph': saint_joseph_mo_DynamicData,
    'saint-louis': saint_louis_mo_DynamicData,
    'saintegenevieve': saintegenevieve_mo_DynamicData,
    'salem': salem_mo_DynamicData,
    'sedalia': sedalia_mo_DynamicData,
    'springfield': springfield_mo_DynamicData,
    'warrensburg': warrensburg_mo_DynamicData,
    'west-plains': west_plains_mo_DynamicData,
  },
  montana: {
    'anaconda': anaconda_mt_DynamicData,
    'billings': billings_mt_DynamicData,
    'bozeman': bozeman_mt_DynamicData,
    'butte': butte_mt_DynamicData,
    'dillon': dillon_mt_DynamicData,
    'fort-benton': fort_benton_mt_DynamicData,
    'glendive': glendive_mt_DynamicData,
    'great-falls': great_falls_mt_DynamicData,
    'havre': havre_mt_DynamicData,
    'helena': helena_mt_DynamicData,
    'kalispell': kalispell_mt_DynamicData,
    'lewistown': lewistown_mt_DynamicData,
    'livingston': livingston_mt_DynamicData,
    'miles-city': miles_city_mt_DynamicData,
    'missoula': missoula_mt_DynamicData,
    'virginia-city': virginia_city_mt_DynamicData,
  },
  nebraska: {
    'beatrice': beatrice_ne_DynamicData,
    'bellevue': bellevue_ne_DynamicData,
    'boys-town': boys_town_ne_DynamicData,
    'chadron': chadron_ne_DynamicData,
    'columbus': columbus_ne_DynamicData,
    'fremont': fremont_ne_DynamicData,
    'grand-island': grand_island_ne_DynamicData,
    'hastings': hastings_ne_DynamicData,
    'kearney': kearney_ne_DynamicData,
    'lincoln': lincoln_ne_DynamicData,
    'mccook': mccook_ne_DynamicData,
    'minden': minden_ne_DynamicData,
    'nebraska-city': nebraska_city_ne_DynamicData,
    'norfolk': norfolk_ne_DynamicData,
    'north-platte': north_platte_ne_DynamicData,
    'omaha': omaha_ne_DynamicData,
    'plattsmouth': plattsmouth_ne_DynamicData,
    'red-cloud': red_cloud_ne_DynamicData,
    'sidney': sidney_ne_DynamicData,
  },
  nevada: {
    'boulder-city': boulder_city_nv_DynamicData,
    'carson-city': carson_city_nv_DynamicData,
    'elko': elko_nv_DynamicData,
    'ely': ely_nv_DynamicData,
    'fallon': fallon_nv_DynamicData,
    'genoa': genoa_nv_DynamicData,
    'goldfield': goldfield_nv_DynamicData,
    'henderson': henderson_nv_DynamicData,
    'las-vegas': las_vegas_nv_DynamicData,
    'north-las-vegas': north_las_vegas_nv_DynamicData,
    'reno': reno_nv_DynamicData,
    'sparks': sparks_nv_DynamicData,
    'virginia-city': virginia_city_nv_DynamicData,
    'winnemucca': winnemucca_nv_DynamicData,
  },
  'new-hampshire': {
    'berlin': berlin_nh_DynamicData,
    'claremont': claremont_nh_DynamicData,
    'concord': concord_nh_DynamicData,
    'derry': derry_nh_DynamicData,
    'dover': dover_nh_DynamicData,
    'durham': durham_nh_DynamicData,
    'exeter': exeter_nh_DynamicData,
    'franklin': franklin_nh_DynamicData,
    'hanover': hanover_nh_DynamicData,
    'hillsborough': hillsborough_nh_DynamicData,
    'keene': keene_nh_DynamicData,
    'laconia': laconia_nh_DynamicData,
    'lebanon': lebanon_nh_DynamicData,
    'manchester': manchester_nh_DynamicData,
    'nashua': nashua_nh_DynamicData,
    'peterborough': peterborough_nh_DynamicData,
    'plymouth': plymouth_nh_DynamicData,
    'portsmouth': portsmouth_nh_DynamicData,
    'rochester': rochester_nh_DynamicData,
    'salem': salem_nh_DynamicData,
    'somersworth': somersworth_nh_DynamicData,
  },
  'new-jersey': {
    'asbury-park': asbury_park_nj_DynamicData,
    'atlantic-city': atlantic_city_nj_DynamicData,
    'bayonne': bayonne_nj_DynamicData,
    'bloomfield': bloomfield_nj_DynamicData,
    'bordentown': bordentown_nj_DynamicData,
    'bound-brook': bound_brook_nj_DynamicData,
    'bridgeton': bridgeton_nj_DynamicData,
    'burlington': burlington_nj_DynamicData,
    'caldwell': caldwell_nj_DynamicData,
    'camden': camden_nj_DynamicData,
    'cape-may': cape_may_nj_DynamicData,
    'clifton': clifton_nj_DynamicData,
    'cranford': cranford_nj_DynamicData,
    'east-orange': east_orange_nj_DynamicData,
    'edison': edison_nj_DynamicData,
    'elizabeth': elizabeth_nj_DynamicData,
    'englewood': englewood_nj_DynamicData,
    'fort-lee': fort_lee_nj_DynamicData,
    'glassboro': glassboro_nj_DynamicData,
    'hackensack': hackensack_nj_DynamicData,
    'haddonfield': haddonfield_nj_DynamicData,
    'hoboken': hoboken_nj_DynamicData,
    'irvington': irvington_nj_DynamicData,
    'jersey-city': jersey_city_nj_DynamicData,
    'lakehurst': lakehurst_nj_DynamicData,
    'lakewood': lakewood_nj_DynamicData,
    'long-beach': long_beach_nj_DynamicData,
    'long-branch': long_branch_nj_DynamicData,
    'madison': madison_nj_DynamicData,
    'menlo-park': menlo_park_nj_DynamicData,
    'millburn': millburn_nj_DynamicData,
    'millville': millville_nj_DynamicData,
    'montclair': montclair_nj_DynamicData,
    'morristown': morristown_nj_DynamicData,
    'mount-holly': mount_holly_nj_DynamicData,
    'new-brunswick': new_brunswick_nj_DynamicData,
    'new-milford': new_milford_nj_DynamicData,
    'newark': newark_nj_DynamicData,
    'ocean-city': ocean_city_nj_DynamicData,
    'orange': orange_nj_DynamicData,
    'parsippany-troy-hills': parsippany_troy_hills_nj_DynamicData,
    'passaic': passaic_nj_DynamicData,
    'paterson': paterson_nj_DynamicData,
    'perth-amboy': perth_amboy_nj_DynamicData,
    'plainfield': plainfield_nj_DynamicData,
    'princeton': princeton_nj_DynamicData,
    'ridgewood': ridgewood_nj_DynamicData,
    'roselle': roselle_nj_DynamicData,
    'rutherford': rutherford_nj_DynamicData,
    'salem': salem_nj_DynamicData,
    'somerville': somerville_nj_DynamicData,
    'south-orange-village': south_orange_village_nj_DynamicData,
    'totowa': totowa_nj_DynamicData,
    'trenton': trenton_nj_DynamicData,
    'union-city': union_city_nj_DynamicData,
    'union': union_nj_DynamicData,
    'vineland': vineland_nj_DynamicData,
    'wayne': wayne_nj_DynamicData,
    'weehawken': weehawken_nj_DynamicData,
    'west-new-york': west_new_york_nj_DynamicData,
    'west-orange': west_orange_nj_DynamicData,
    'willingboro': willingboro_nj_DynamicData,
    'woodbridge': woodbridge_nj_DynamicData,
  },
  'new-mexico': {
    'acoma': acoma_nm_DynamicData,
    'alamogordo': alamogordo_nm_DynamicData,
    'albuquerque': albuquerque_nm_DynamicData,
    'artesia': artesia_nm_DynamicData,
    'belen': belen_nm_DynamicData,
    'carlsbad': carlsbad_nm_DynamicData,
    'clovis': clovis_nm_DynamicData,
    'deming': deming_nm_DynamicData,
    'farmington': farmington_nm_DynamicData,
    'gallup': gallup_nm_DynamicData,
    'grants': grants_nm_DynamicData,
    'hobbs': hobbs_nm_DynamicData,
    'las-cruces': las_cruces_nm_DynamicData,
    'las-vegas': las_vegas_nm_DynamicData,
    'los-alamos': los_alamos_nm_DynamicData,
    'lovington': lovington_nm_DynamicData,
    'portales': portales_nm_DynamicData,
    'raton': raton_nm_DynamicData,
    'roswell': roswell_nm_DynamicData,
    'santa-fe': santa_fe_nm_DynamicData,
    'shiprock': shiprock_nm_DynamicData,
    'silvercity': silvercity_nm_DynamicData,
    'socorro': socorro_nm_DynamicData,
    'taos': taos_nm_DynamicData,
    'truth-or-consequences': truth_or_consequences_nm_DynamicData,
    'tucumcari': tucumcari_nm_DynamicData,
  },
  'new-york': {
    'albany': albany_ny_DynamicData,
    'amsterdam': amsterdam_ny_DynamicData,
    'auburn': auburn_ny_DynamicData,
    'babylon': babylon_ny_DynamicData,
    'batavia': batavia_ny_DynamicData,
    'beacon': beacon_ny_DynamicData,
    'bedford': bedford_ny_DynamicData,
    'binghamton': binghamton_ny_DynamicData,
    'bronx': bronx_ny_DynamicData,
    'brooklyn': brooklyn_ny_DynamicData,
    'buffalo': buffalo_ny_DynamicData,
    'chautauqua': chautauqua_ny_DynamicData,
    'cheektowaga': cheektowaga_ny_DynamicData,
    'clinton': clinton_ny_DynamicData,
    'cohoes': cohoes_ny_DynamicData,
    'coney-island': coney_island_ny_DynamicData,
    'cooperstown': cooperstown_ny_DynamicData,
    'corning': corning_ny_DynamicData,
    'cortland': cortland_ny_DynamicData,
    'crown-point': crown_point_ny_DynamicData,
    'dunkirk': dunkirk_ny_DynamicData,
    'eastaurora': eastaurora_ny_DynamicData,
    'east-hampton': east_hampton_ny_DynamicData,
    'eastchester': eastchester_ny_DynamicData,
    'elmira': elmira_ny_DynamicData,
    'flushing': flushing_ny_DynamicData,
    'forest-hills': forest_hills_ny_DynamicData,
    'fredonia': fredonia_ny_DynamicData,
    'garden-city': garden_city_ny_DynamicData,
    'geneva': geneva_ny_DynamicData,
    'glens-falls': glens_falls_ny_DynamicData,
    'gloversville': gloversville_ny_DynamicData,
    'great-neck': great_neck_ny_DynamicData,
    'hammondsport': hammondsport_ny_DynamicData,
    'harlem': harlem_ny_DynamicData,
    'hempstead': hempstead_ny_DynamicData,
    'herkimer': herkimer_ny_DynamicData,
    'hudson': hudson_ny_DynamicData,
    'huntington': huntington_ny_DynamicData,
    'hyde-park': hyde_park_ny_DynamicData,
    'ilion': ilion_ny_DynamicData,
    'ithaca': ithaca_ny_DynamicData,
    'jamestown': jamestown_ny_DynamicData,
    'johnstown': johnstown_ny_DynamicData,
    'kingston': kingston_ny_DynamicData,
    'lackawanna': lackawanna_ny_DynamicData,
    'lake-placid': lake_placid_ny_DynamicData,
    'levittown': levittown_ny_DynamicData,
    'lockport': lockport_ny_DynamicData,
    'mamaroneck': mamaroneck_ny_DynamicData,
    'manhattan': manhattan_ny_DynamicData,
    'massena': massena_ny_DynamicData,
    'middletown': middletown_ny_DynamicData,
    'mineola': mineola_ny_DynamicData,
    'mount-vernon': mount_vernon_ny_DynamicData,
    'new-paltz': new_paltz_ny_DynamicData,
    'new-rochelle': new_rochelle_ny_DynamicData,
    'new-windsor': new_windsor_ny_DynamicData,
    'new-york-city': new_york_city_ny_DynamicData,
    'newburgh': newburgh_ny_DynamicData,
    'niagara-falls': niagara_falls_ny_DynamicData,
    'north-hempstead': north_hempstead_ny_DynamicData,
    'nyack': nyack_ny_DynamicData,
    'ogdensburg': ogdensburg_ny_DynamicData,
    'olean': olean_ny_DynamicData,
    'oneida': oneida_ny_DynamicData,
    'oneonta': oneonta_ny_DynamicData,
    'ossining': ossining_ny_DynamicData,
    'oswego': oswego_ny_DynamicData,
    'oyster-bay': oyster_bay_ny_DynamicData,
    'palmyra': palmyra_ny_DynamicData,
    'peekskill': peekskill_ny_DynamicData,
    'plattsburgh': plattsburgh_ny_DynamicData,
    'port-washington': port_washington_ny_DynamicData,
    'potsdam': potsdam_ny_DynamicData,
    'poughkeepsie': poughkeepsie_ny_DynamicData,
    'queens': queens_ny_DynamicData,
    'rensselaer': rensselaer_ny_DynamicData,
    'rochester': rochester_ny_DynamicData,
    'rome': rome_ny_DynamicData,
    'rotterdam': rotterdam_ny_DynamicData,
    'rye': rye_ny_DynamicData,
    'sag-harbor': sag_harbor_ny_DynamicData,
    'saranac-lake': saranac_lake_ny_DynamicData,
    'saratoga-springs': saratoga_springs_ny_DynamicData,
    'scarsdale': scarsdale_ny_DynamicData,
    'schenectady': schenectady_ny_DynamicData,
    'seneca-falls': seneca_falls_ny_DynamicData,
    'southampton': southampton_ny_DynamicData,
    'staten-island': staten_island_ny_DynamicData,
    'stony-brook': stony_brook_ny_DynamicData,
    'stony-point': stony_point_ny_DynamicData,
    'syracuse': syracuse_ny_DynamicData,
    'tarrytown': tarrytown_ny_DynamicData,
    'ticonderoga': ticonderoga_ny_DynamicData,
    'tonawanda': tonawanda_ny_DynamicData,
    'troy': troy_ny_DynamicData,
    'utica': utica_ny_DynamicData,
    'watertown': watertown_ny_DynamicData,
    'watervliet': watervliet_ny_DynamicData,
    'watkins-glen': watkins_glen_ny_DynamicData,
    'west-seneca': west_seneca_ny_DynamicData,
    'white-plains': white_plains_ny_DynamicData,
    'woodstock': woodstock_ny_DynamicData,
    'yonkers': yonkers_ny_DynamicData,
  },
  
  'north-carolina': {
    'asheboro': asheboro_nc_DynamicData,
    'asheville': asheville_nc_DynamicData,
    'bath': bath_nc_DynamicData,
    'beaufort': beaufort_nc_DynamicData,
    'boone': boone_nc_DynamicData,
    'burlington': burlington_nc_DynamicData,
    'chapel-hill': chapel_hill_nc_DynamicData,
    'charlotte': charlotte_nc_DynamicData,
    'concord': concord_nc_DynamicData,
    'durham': durham_nc_DynamicData,
    'edenton': edenton_nc_DynamicData,
    'elizabeth-city': elizabeth_city_nc_DynamicData,
    'fayetteville': fayetteville_nc_DynamicData,
    'gastonia': gastonia_nc_DynamicData,
    'goldsboro': goldsboro_nc_DynamicData,
    'greensboro': greensboro_nc_DynamicData,
    'greenville': greenville_nc_DynamicData,
    'halifax': halifax_nc_DynamicData,
    'henderson': henderson_nc_DynamicData,
    'hickory': hickory_nc_DynamicData,
    'high-point': high_point_nc_DynamicData,
    'hillsborough': hillsborough_nc_DynamicData,
    'jacksonville': jacksonville_nc_DynamicData,
    'kinston': kinston_nc_DynamicData,
    'kitty-hawk': kitty_hawk_nc_DynamicData,
    'lumberton': lumberton_nc_DynamicData,
    'morehead-city': morehead_city_nc_DynamicData,
    'morganton': morganton_nc_DynamicData,
    'nags-head': nags_head_nc_DynamicData,
    'new-bern': new_bern_nc_DynamicData,
    'pinehurst': pinehurst_nc_DynamicData,
    'raleigh': raleigh_nc_DynamicData,
    'rockymount': rockymount_nc_DynamicData,
    'salisbury': salisbury_nc_DynamicData,
    'shelby': shelby_nc_DynamicData,
    'washington': washington_nc_DynamicData,
    'wilmington': wilmington_nc_DynamicData,
    'wilson': wilson_nc_DynamicData,
    'winston-salem': winston_salem_nc_DynamicData,
  },
  'north-dakota': {
    'bismarck': bismarck_nd_DynamicData,
    'devils-lake': devils_lake_nd_DynamicData,
    'dickinson': dickinson_nd_DynamicData,
    'fargo': fargo_nd_DynamicData,
    'grand-forks': grand_forks_nd_DynamicData,
    'jamestown': jamestown_nd_DynamicData,
    'mandan': mandan_nd_DynamicData,
    'minot': minot_nd_DynamicData,
    'rugby': rugby_nd_DynamicData,
    'valleycity': valleycity_nd_DynamicData,
    'wahpeton': wahpeton_nd_DynamicData,
    'williston': williston_nd_DynamicData,
  },
  ohio: {
    'akron': akron_oh_DynamicData,
    'alliance': alliance_oh_DynamicData,
    'ashtabula': ashtabula_oh_DynamicData,
    'athens': athens_oh_DynamicData,
    'barberton': barberton_oh_DynamicData,
    'bedford': bedford_oh_DynamicData,
    'bellefontaine': bellefontaine_oh_DynamicData,
    'bowling-green': bowling_green_oh_DynamicData,
    'canton': canton_oh_DynamicData,
    'chillicothe': chillicothe_oh_DynamicData,
    'cincinnati': cincinnati_oh_DynamicData,
    'cleveland-heights': cleveland_heights_oh_DynamicData,
    'cleveland': cleveland_oh_DynamicData,
    'columbus': columbus_oh_DynamicData,
    'conneaut': conneaut_oh_DynamicData,
    'cuyahoga-falls': cuyahoga_falls_oh_DynamicData,
    'dayton': dayton_oh_DynamicData,
    'defiance': defiance_oh_DynamicData,
    'delaware': delaware_oh_DynamicData,
    'east-cleveland': east_cleveland_oh_DynamicData,
    'east-liverpool': east_liverpool_oh_DynamicData,
    'elyria': elyria_oh_DynamicData,
    'euclid': euclid_oh_DynamicData,
    'findlay': findlay_oh_DynamicData,
    'gallipolis': gallipolis_oh_DynamicData,
    'greenville': greenville_oh_DynamicData,
    'hamilton': hamilton_oh_DynamicData,
    'kent': kent_oh_DynamicData,
    'kettering': kettering_oh_DynamicData,
    'lakewood': lakewood_oh_DynamicData,
    'lancaster': lancaster_oh_DynamicData,
    'lima': lima_oh_DynamicData,
    'lorain': lorain_oh_DynamicData,
    'mansfield': mansfield_oh_DynamicData,
    'marietta': marietta_oh_DynamicData,
    'marion': marion_oh_DynamicData,
    'martins-ferry': martins_ferry_oh_DynamicData,
    'massillon': massillon_oh_DynamicData,
    'mentor': mentor_oh_DynamicData,
    'middletown': middletown_oh_DynamicData,
    'milan': milan_oh_DynamicData,
    'mount-vernon': mount_vernon_oh_DynamicData,
    'new-philadelphia': new_philadelphia_oh_DynamicData,
    'newark': newark_oh_DynamicData,
    'niles': niles_oh_DynamicData,
    'north-college-hill': north_college_hill_oh_DynamicData,
    'norwalk': norwalk_oh_DynamicData,
    'oberlin': oberlin_oh_DynamicData,
    'painesville': painesville_oh_DynamicData,
    'parma': parma_oh_DynamicData,
    'piqua': piqua_oh_DynamicData,
    'portsmouth': portsmouth_oh_DynamicData,
    'put-in-bay': put_in_bay_oh_DynamicData,
    'salem': salem_oh_DynamicData,
    'sandusky': sandusky_oh_DynamicData,
    'shaker-heights': shaker_heights_oh_DynamicData,
    'springfield': springfield_oh_DynamicData,
    'steubenville': steubenville_oh_DynamicData,
    'tiffin': tiffin_oh_DynamicData,
    'toledo': toledo_oh_DynamicData,
    'urbana': urbana_oh_DynamicData,
    'warren': warren_oh_DynamicData,
    'wooster': wooster_oh_DynamicData,
    'worthington': worthington_oh_DynamicData,
    'xenia': xenia_oh_DynamicData,
    'yellow-springs': yellow_springs_oh_DynamicData,
    'youngstown': youngstown_oh_DynamicData,
    'zanesville': zanesville_oh_DynamicData,
  },
  oklahoma: {
    'ada': ada_ok_DynamicData,
    'altus': altus_ok_DynamicData,
    'alva': alva_ok_DynamicData,
    'anadarko': anadarko_ok_DynamicData,
    'ardmore': ardmore_ok_DynamicData,
    'bartlesville': bartlesville_ok_DynamicData,
    'bethany': bethany_ok_DynamicData,
    'chickasha': chickasha_ok_DynamicData,
    'claremore': claremore_ok_DynamicData,
    'clinton': clinton_ok_DynamicData,
    'cushing': cushing_ok_DynamicData,
    'duncan': duncan_ok_DynamicData,
    'durant': durant_ok_DynamicData,
    'edmond': edmond_ok_DynamicData,
    'el-reno': el_reno_ok_DynamicData,
    'elk-city': elk_city_ok_DynamicData,
    'enid': enid_ok_DynamicData,
    'eufaula': eufaula_ok_DynamicData,
    'frederick': frederick_ok_DynamicData,
    'guthrie': guthrie_ok_DynamicData,
    'guymon': guymon_ok_DynamicData,
    'hobart': hobart_ok_DynamicData,
    'holdenville': holdenville_ok_DynamicData,
    'hugo': hugo_ok_DynamicData,
    'lawton': lawton_ok_DynamicData,
    'mcalester': mcalester_ok_DynamicData,
    'miami': miami_ok_DynamicData,
    'midwest-city': midwest_city_ok_DynamicData,
    'moore': moore_ok_DynamicData,
    'muskogee': muskogee_ok_DynamicData,
    'norman': norman_ok_DynamicData,
    'oklahoma-city': oklahoma_city_ok_DynamicData,
    'okmulgee': okmulgee_ok_DynamicData,
    'pauls-valley': pauls_valley_ok_DynamicData,
    'pawhuska': pawhuska_ok_DynamicData,
    'perry': perry_ok_DynamicData,
    'ponca-city': ponca_city_ok_DynamicData,
    'pryor': pryor_ok_DynamicData,
    'sallisaw': sallisaw_ok_DynamicData,
    'sand-springs': sand_springs_ok_DynamicData,
    'sapulpa': sapulpa_ok_DynamicData,
    'seminole': seminole_ok_DynamicData,
    'shawnee': shawnee_ok_DynamicData,
    'stillwater': stillwater_ok_DynamicData,
    'tahlequah': tahlequah_ok_DynamicData,
    'the-village': the_village_ok_DynamicData,
    'tulsa': tulsa_ok_DynamicData,
    'vinita': vinita_ok_DynamicData,
    'wewoka': wewoka_ok_DynamicData,
    'woodward': woodward_ok_DynamicData,
  },
  oregon: {
    'albany': albany_or_DynamicData,
    'ashland': ashland_or_DynamicData,
    'astoria': astoria_or_DynamicData,
    'baker-city': baker_city_or_DynamicData,
    'beaverton': beaverton_or_DynamicData,
    'bend': bend_or_DynamicData,
    'brookings': brookings_or_DynamicData,
    'burns': burns_or_DynamicData,
    'coos-bay': coos_bay_or_DynamicData,
    'corvallis': corvallis_or_DynamicData,
    'eugene': eugene_or_DynamicData,
    'grants-pass': grants_pass_or_DynamicData,
    'hillsboro': hillsboro_or_DynamicData,
    'hood-river': hood_river_or_DynamicData,
    'jacksonville': jacksonville_or_DynamicData,
    'john-day': john_day_or_DynamicData,
    'klamath-falls': klamath_falls_or_DynamicData,
    'la-grande': la_grande_or_DynamicData,
    'lake-oswego': lake_oswego_or_DynamicData,
    'lakeview': lakeview_or_DynamicData,
    'mcminnville': mcminnville_or_DynamicData,
    'medford': medford_or_DynamicData,
    'newberg': newberg_or_DynamicData,
    'newport': newport_or_DynamicData,
    'ontario': ontario_or_DynamicData,
    'oregon-city': oregon_city_or_DynamicData,
    'pendleton': pendleton_or_DynamicData,
    'port-orford': port_orford_or_DynamicData,
    'portland': portland_or_DynamicData,
    'prineville': prineville_or_DynamicData,
    'redmond': redmond_or_DynamicData,
    'reedsport': reedsport_or_DynamicData,
    'roseburg': roseburg_or_DynamicData,
    'salem': salem_or_DynamicData,
    'seaside': seaside_or_DynamicData,
    'springfield': springfield_or_DynamicData,
    'thedalles': thedalles_or_DynamicData,
    'tillamook': tillamook_or_DynamicData,
  },
  pennsylvania: {
    'abington': abington_pa_DynamicData,
    'aliquippa': aliquippa_pa_DynamicData,
    'allentown': allentown_pa_DynamicData,
    'altoona': altoona_pa_DynamicData,
    'ambridge': ambridge_pa_DynamicData,
    'bedford': bedford_pa_DynamicData,
    'bethlehem': bethlehem_pa_DynamicData,
    'bloomsburg': bloomsburg_pa_DynamicData,
    'bradford': bradford_pa_DynamicData,
    'bristol': bristol_pa_DynamicData,
    'carbondale': carbondale_pa_DynamicData,
    'carlisle': carlisle_pa_DynamicData,
    'chambersburg': chambersburg_pa_DynamicData,
    'chester': chester_pa_DynamicData,
    'columbia': columbia_pa_DynamicData,
    'easton': easton_pa_DynamicData,
    'erie': erie_pa_DynamicData,
    'franklin': franklin_pa_DynamicData,
    'germantown': germantown_pa_DynamicData,
    'gettysburg': gettysburg_pa_DynamicData,
    'greensburg': greensburg_pa_DynamicData,
    'hanover': hanover_pa_DynamicData,
    'harmony': harmony_pa_DynamicData,
    'harrisburg': harrisburg_pa_DynamicData,
    'hazleton': hazleton_pa_DynamicData,
    'hershey': hershey_pa_DynamicData,
    'homestead': homestead_pa_DynamicData,
    'honesdale': honesdale_pa_DynamicData,
    'indiana': indiana_pa_DynamicData,
    'jeannette': jeannette_pa_DynamicData,
    'jim-thorpe': jim_thorpe_pa_DynamicData,
    'johnstown': johnstown_pa_DynamicData,
    'lancaster': lancaster_pa_DynamicData,
    'lebanon': lebanon_pa_DynamicData,
    'levittown': levittown_pa_DynamicData,
    'lewistown': lewistown_pa_DynamicData,
    'lock-haven': lock_haven_pa_DynamicData,
    'lower-southampton': lower_southampton_pa_DynamicData,
    'mckeesport': mckeesport_pa_DynamicData,
    'meadville': meadville_pa_DynamicData,
    'middletown': middletown_pa_DynamicData,
    'monroeville': monroeville_pa_DynamicData,
    'nanticoke': nanticoke_pa_DynamicData,
    'new-castle': new_castle_pa_DynamicData,
    'new-hope': new_hope_pa_DynamicData,
    'new-kensington': new_kensington_pa_DynamicData,
    'norristown': norristown_pa_DynamicData,
    'oil-city': oil_city_pa_DynamicData,
    'philadelphia': philadelphia_pa_DynamicData,
    'phoenixville': phoenixville_pa_DynamicData,
    'pittsburgh': pittsburgh_pa_DynamicData,
    'pottstown': pottstown_pa_DynamicData,
    'pottsville': pottsville_pa_DynamicData,
    'reading': reading_pa_DynamicData,
    'scranton': scranton_pa_DynamicData,
    'shamokin': shamokin_pa_DynamicData,
    'sharon': sharon_pa_DynamicData,
    'state-college': state_college_pa_DynamicData,
    'stroudsburg': stroudsburg_pa_DynamicData,
    'sunbury': sunbury_pa_DynamicData,
    'swarthmore': swarthmore_pa_DynamicData,
    'tamaqua': tamaqua_pa_DynamicData,
    'titusville': titusville_pa_DynamicData,
    'uniontown': uniontown_pa_DynamicData,
    'warren': warren_pa_DynamicData,
    'washington': washington_pa_DynamicData,
    'west-chester': west_chester_pa_DynamicData,
    'wilkes-barre': wilkes_barre_pa_DynamicData,
    'williamsport': williamsport_pa_DynamicData,
    'york': york_pa_DynamicData,
  },
  'rhode-island': {
    'barrington': barrington_ri_DynamicData,
    'bristol': bristol_ri_DynamicData,
    'central-falls': central_falls_ri_DynamicData,
    'cranston': cranston_ri_DynamicData,
    'east-greenwich': east_greenwich_ri_DynamicData,
    'east-providence': east_providence_ri_DynamicData,
    'kingston': kingston_ri_DynamicData,
    'middletown': middletown_ri_DynamicData,
    'narragansett': narragansett_ri_DynamicData,
    'newport': newport_ri_DynamicData,
    'north-kingstown': north_kingstown_ri_DynamicData,
    'pawtucket': pawtucket_ri_DynamicData,
    'portsmouth': portsmouth_ri_DynamicData,
    'providence': providence_ri_DynamicData,
    'south-kingstown': south_kingstown_ri_DynamicData,
    'tiverton': tiverton_ri_DynamicData,
    'warren': warren_ri_DynamicData,
    'warwick': warwick_ri_DynamicData,
    'westerly': westerly_ri_DynamicData,
    'wickford': wickford_ri_DynamicData,
    'woonsocket': woonsocket_ri_DynamicData,
  },
  'south-carolina': {
    'abbeville': abbeville_sc_DynamicData,
    'aiken': aiken_sc_DynamicData,
    'anderson': anderson_sc_DynamicData,
    'beaufort': beaufort_sc_DynamicData,
    'camden': camden_sc_DynamicData,
    'charleston': charleston_sc_DynamicData,
    'columbia': columbia_sc_DynamicData,
    'darlington': darlington_sc_DynamicData,
    'florence': florence_sc_DynamicData,
    'gaffney': gaffney_sc_DynamicData,
    'georgetown': georgetown_sc_DynamicData,
    'greenville': greenville_sc_DynamicData,
    'greenwood': greenwood_sc_DynamicData,
    'hartsville': hartsville_sc_DynamicData,
    'lancaster': lancaster_sc_DynamicData,
    'mount-pleasant': mount_pleasant_sc_DynamicData,
    'myrtle-beach': myrtle_beach_sc_DynamicData,
    'orangeburg': orangeburg_sc_DynamicData,
    'rock-hill': rock_hill_sc_DynamicData,
    'spartanburg': spartanburg_sc_DynamicData,
    'sumter': sumter_sc_DynamicData,
    'union': union_sc_DynamicData,
  },
  'south-dakota': {
    'aberdeen': aberdeen_sd_DynamicData,
    'belle-fourche': belle_fourche_sd_DynamicData,
    'brookings': brookings_sd_DynamicData,
    'canton': canton_sd_DynamicData,
    'custer': custer_sd_DynamicData,
    'de-smet': de_smet_sd_DynamicData,
    'deadwood': deadwood_sd_DynamicData,
    'hot-springs': hot_springs_sd_DynamicData,
    'huron': huron_sd_DynamicData,
    'lead': lead_sd_DynamicData,
    'madison': madison_sd_DynamicData,
    'milbank': milbank_sd_DynamicData,
    'mitchell': mitchell_sd_DynamicData,
    'mobridge': mobridge_sd_DynamicData,
    'pierre': pierre_sd_DynamicData,
    'rapid-city': rapid_city_sd_DynamicData,
    'sioux-falls': sioux_falls_sd_DynamicData,
    'spearfish': spearfish_sd_DynamicData,
    'sturgis': sturgis_sd_DynamicData,
    'vermillion': vermillion_sd_DynamicData,
    'watertown': watertown_sd_DynamicData,
    'yankton': yankton_sd_DynamicData,
  },
  tennessee: {
    'alcoa': alcoa_tn_DynamicData,
    'athens': athens_tn_DynamicData,
    'chattanooga': chattanooga_tn_DynamicData,
    'clarksville': clarksville_tn_DynamicData,
    'cleveland': cleveland_tn_DynamicData,
    'columbia': columbia_tn_DynamicData,
    'cookeville': cookeville_tn_DynamicData,
    'dayton': dayton_tn_DynamicData,
    'elizabethton': elizabethton_tn_DynamicData,
    'franklin': franklin_tn_DynamicData,
    'gallatin': gallatin_tn_DynamicData,
    'gatlinburg': gatlinburg_tn_DynamicData,
    'greeneville': greeneville_tn_DynamicData,
    'jackson': jackson_tn_DynamicData,
    'johnson-city': johnson_city_tn_DynamicData,
    'jonesborough': jonesborough_tn_DynamicData,
    'kingsport': kingsport_tn_DynamicData,
    'knoxville': knoxville_tn_DynamicData,
    'lebanon': lebanon_tn_DynamicData,
    'maryville': maryville_tn_DynamicData,
    'memphis': memphis_tn_DynamicData,
    'morristown': morristown_tn_DynamicData,
    'murfreesboro': murfreesboro_tn_DynamicData,
    'nashville': nashville_tn_DynamicData,
    'norris': norris_tn_DynamicData,
    'oak-ridge': oak_ridge_tn_DynamicData,
    'shelbyville': shelbyville_tn_DynamicData,
    'tullahoma': tullahoma_tn_DynamicData,
  },
  texas: {
    'abilene': abilene_tx_DynamicData,
    'alpine': alpine_tx_DynamicData,
    'amarillo': amarillo_tx_DynamicData,
    'arlington': arlington_tx_DynamicData,
    'austin': austin_tx_DynamicData,
    'baytown': baytown_tx_DynamicData,
    'beaumont': beaumont_tx_DynamicData,
    'big-spring': big_spring_tx_DynamicData,
    'borger': borger_tx_DynamicData,
    'brownsville': brownsville_tx_DynamicData,
    'bryan': bryan_tx_DynamicData,
    'canyon': canyon_tx_DynamicData,
    'cleburne': cleburne_tx_DynamicData,
    'college-station': college_station_tx_DynamicData,
    'corpus-christi': corpus_christi_tx_DynamicData,
    'crystal-city': crystal_city_tx_DynamicData,
    'dallas': dallas_tx_DynamicData,
    'del-rio': del_rio_tx_DynamicData,
    'denison': denison_tx_DynamicData,
    'denton': denton_tx_DynamicData,
    'eagle-pass': eagle_pass_tx_DynamicData,
    'edinburg': edinburg_tx_DynamicData,
    'el-paso': el_paso_tx_DynamicData,
    'fort-worth': fort_worth_tx_DynamicData,
    'freeport': freeport_tx_DynamicData,
    'galveston': galveston_tx_DynamicData,
    'garland': garland_tx_DynamicData,
    'goliad': goliad_tx_DynamicData,
    'greenville': greenville_tx_DynamicData,
    'harlingen': harlingen_tx_DynamicData,
    'houston': houston_tx_DynamicData,
    'huntsville': huntsville_tx_DynamicData,
    'irving': irving_tx_DynamicData,
    'johnson-city': johnson_city_tx_DynamicData,
    'kilgore': kilgore_tx_DynamicData,
    'killeen': killeen_tx_DynamicData,
    'kingsville': kingsville_tx_DynamicData,
    'laredo': laredo_tx_DynamicData,
    'longview': longview_tx_DynamicData,
    'lubbock': lubbock_tx_DynamicData,
    'lufkin': lufkin_tx_DynamicData,
    'marshall': marshall_tx_DynamicData,
    'mcallen': mcallen_tx_DynamicData,
    'mckinney': mckinney_tx_DynamicData,
    'mesquite': mesquite_tx_DynamicData,
    'midland': midland_tx_DynamicData,
    'mission': mission_tx_DynamicData,
    'nacogdoches': nacogdoches_tx_DynamicData,
    'new-braunfels': new_braunfels_tx_DynamicData,
    'odessa': odessa_tx_DynamicData,
    'orange': orange_tx_DynamicData,
    'pampa': pampa_tx_DynamicData,
    'paris': paris_tx_DynamicData,
    'pasadena': pasadena_tx_DynamicData,
    'pecos': pecos_tx_DynamicData,
    'pharr': pharr_tx_DynamicData,
    'plainview': plainview_tx_DynamicData,
    'plano': plano_tx_DynamicData,
    'port-arthur': port_arthur_tx_DynamicData,
    'port-lavaca': port_lavaca_tx_DynamicData,
    'richardson': richardson_tx_DynamicData,
    'san-angelo': san_angelo_tx_DynamicData,
    'san-antonio': san_antonio_tx_DynamicData,
    'san-felipe': san_felipe_tx_DynamicData,
    'san-marcos': san_marcos_tx_DynamicData,
    'sherman': sherman_tx_DynamicData,
    'sweetwater': sweetwater_tx_DynamicData,
    'temple': temple_tx_DynamicData,
    'texarkana': texarkana_tx_DynamicData,
    'texas-city': texas_city_tx_DynamicData,
    'tyler': tyler_tx_DynamicData,
    'uvalde': uvalde_tx_DynamicData,
    'victoria': victoria_tx_DynamicData,
    'waco': waco_tx_DynamicData,
    'weatherford': weatherford_tx_DynamicData,
    'wichita-falls': wichita_falls_tx_DynamicData,
    'ysleta': ysleta_tx_DynamicData,
  },
  utah: {
    'alta': alta_ut_DynamicData,
    'american-fork': american_fork_ut_DynamicData,
    'bountiful': bountiful_ut_DynamicData,
    'brigham-city': brigham_city_ut_DynamicData,
    'cedar-city': cedar_city_ut_DynamicData,
    'clearfield': clearfield_ut_DynamicData,
    'delta': delta_ut_DynamicData,
    'fillmore': fillmore_ut_DynamicData,
    'green-river': green_river_ut_DynamicData,
    'heber-city': heber_city_ut_DynamicData,
    'kanab': kanab_ut_DynamicData,
    'layton': layton_ut_DynamicData,
    'lehi': lehi_ut_DynamicData,
    'logan': logan_ut_DynamicData,
    'manti': manti_ut_DynamicData,
    'moab': moab_ut_DynamicData,
    'monticello': monticello_ut_DynamicData,
    'murray': murray_ut_DynamicData,
    'nephi': nephi_ut_DynamicData,
    'ogden': ogden_ut_DynamicData,
    'orderville': orderville_ut_DynamicData,
    'orem': orem_ut_DynamicData,
    'panguitch': panguitch_ut_DynamicData,
    'park-city': park_city_ut_DynamicData,
    'payson': payson_ut_DynamicData,
    'price': price_ut_DynamicData,
    'provo': provo_ut_DynamicData,
    'saint-george': saint_george_ut_DynamicData,
    'salt-lake-city': salt_lake_city_ut_DynamicData,
    'spanish-fork': spanish_fork_ut_DynamicData,
    'springville': springville_ut_DynamicData,
    'tooele': tooele_ut_DynamicData,
    'vernal': vernal_ut_DynamicData,
  },
  vermont: {
    'barre': barre_vt_DynamicData,
    'bellows-falls': bellows_falls_vt_DynamicData,
    'bennington': bennington_vt_DynamicData,
    'brattleboro': brattleboro_vt_DynamicData,
    'burlington': burlington_vt_DynamicData,
    'essex': essex_vt_DynamicData,
    'manchester': manchester_vt_DynamicData,
    'middlebury': middlebury_vt_DynamicData,
    'montpelier': montpelier_vt_DynamicData,
    'newport': newport_vt_DynamicData,
    'plymouth': plymouth_vt_DynamicData,
    'rutland': rutland_vt_DynamicData,
    'saint-albans': saint_albans_vt_DynamicData,
    'saint-johnsbury': saint_johnsbury_vt_DynamicData,
    'sharon': sharon_vt_DynamicData,
    'winooski': winooski_vt_DynamicData,
  },
  virginia: {
    'abingdon': abingdon_va_DynamicData,
    'alexandria': alexandria_va_DynamicData,
    'bristol': bristol_va_DynamicData,
    'charlottesville': charlottesville_va_DynamicData,
    'chesapeake': chesapeake_va_DynamicData,
    'danville': danville_va_DynamicData,
    'fairfax': fairfax_va_DynamicData,
    'falls-church': falls_church_va_DynamicData,
    'fredericksburg': fredericksburg_va_DynamicData,
    'hampton': hampton_va_DynamicData,
    'hanover': hanover_va_DynamicData,
    'hopewell': hopewell_va_DynamicData,
    'lexington': lexington_va_DynamicData,
    'lynchburg': lynchburg_va_DynamicData,
    'manassas': manassas_va_DynamicData,
    'martinsville': martinsville_va_DynamicData,
    'new-market': new_market_va_DynamicData,
    'newport-news': newport_news_va_DynamicData,
    'norfolk': norfolk_va_DynamicData,
    'petersburg': petersburg_va_DynamicData,
    'portsmouth': portsmouth_va_DynamicData,
    'reston': reston_va_DynamicData,
    'richmond': richmond_va_DynamicData,
    'roanoke': roanoke_va_DynamicData,
    'staunton': staunton_va_DynamicData,
    'suffolk': suffolk_va_DynamicData,
    'virginia-beach': virginia_beach_va_DynamicData,
    'waynesboro': waynesboro_va_DynamicData,
    'williamsburg': williamsburg_va_DynamicData,
    'winchester': winchester_va_DynamicData,
  },
  washington: {
    'aberdeen': aberdeen_wa_DynamicData,
    'anacortes': anacortes_wa_DynamicData,
    'auburn': auburn_wa_DynamicData,
    'bellevue': bellevue_wa_DynamicData,
    'bellingham': bellingham_wa_DynamicData,
    'bremerton': bremerton_wa_DynamicData,
    'centralia': centralia_wa_DynamicData,
    'coulee-dam': coulee_dam_wa_DynamicData,
    'coupeville': coupeville_wa_DynamicData,
    'ellensburg': ellensburg_wa_DynamicData,
    'ephrata': ephrata_wa_DynamicData,
    'everett': everett_wa_DynamicData,
    'hoquiam': hoquiam_wa_DynamicData,
    'kelso': kelso_wa_DynamicData,
    'kennewick': kennewick_wa_DynamicData,
    'longview': longview_wa_DynamicData,
    'moses-lake': moses_lake_wa_DynamicData,
    'oak-harbor': oak_harbor_wa_DynamicData,
    'olympia': olympia_wa_DynamicData,
    'pasco': pasco_wa_DynamicData,
    'point-roberts': point_roberts_wa_DynamicData,
    'port-angeles': port_angeles_wa_DynamicData,
    'pullman': pullman_wa_DynamicData,
    'puyallup': puyallup_wa_DynamicData,
    'redmond': redmond_wa_DynamicData,
    'renton': renton_wa_DynamicData,
    'richland': richland_wa_DynamicData,
    'seattle': seattle_wa_DynamicData,
    'spokane': spokane_wa_DynamicData,
    'tacoma': tacoma_wa_DynamicData,
    'vancouver': vancouver_wa_DynamicData,
    'walla-walla': walla_walla_wa_DynamicData,
    'wenatchee': wenatchee_wa_DynamicData,
    'yakima': yakima_wa_DynamicData,
  },

  'west-virginia': {
    'bath': bath_wv_DynamicData,
    'beckley': beckley_wv_DynamicData,
    'bluefield': bluefield_wv_DynamicData,
    'buckhannon': buckhannon_wv_DynamicData,
    'charles-town': charles_town_wv_DynamicData,
    'charleston': charleston_wv_DynamicData,
    'clarksburg': clarksburg_wv_DynamicData,
    'elkins': elkins_wv_DynamicData,
    'fairmont': fairmont_wv_DynamicData,
    'grafton': grafton_wv_DynamicData,
    'harpers-ferry': harpers_ferry_wv_DynamicData,
    'hillsboro': hillsboro_wv_DynamicData,
    'hinton': hinton_wv_DynamicData,
    'huntington': huntington_wv_DynamicData,
    'keyser': keyser_wv_DynamicData,
    'lewisburg': lewisburg_wv_DynamicData,
    'logan': logan_wv_DynamicData,
    'martinsburg': martinsburg_wv_DynamicData,
    'morgantown': morgantown_wv_DynamicData,
    'moundsville': moundsville_wv_DynamicData,
    'new-martinsville': new_martinsville_wv_DynamicData,
    'parkersburg': parkersburg_wv_DynamicData,
    'philippi': philippi_wv_DynamicData,
    'point-pleasant': point_pleasant_wv_DynamicData,
    'princeton': princeton_wv_DynamicData,
    'romney': romney_wv_DynamicData,
    'shepherdstown': shepherdstown_wv_DynamicData,
    'south-charleston': south_charleston_wv_DynamicData,
    'summersville': summersville_wv_DynamicData,
    'weirton': weirton_wv_DynamicData,
    'welch': welch_wv_DynamicData,
    'wellsburg': wellsburg_wv_DynamicData,
    'weston': weston_wv_DynamicData,
    'wheeling': wheeling_wv_DynamicData,
    'white-sulphur-springs': white_sulphur_springs_wv_DynamicData,
    'williamson': williamson_wv_DynamicData,
  },
  wisconsin: {
    'appleton': appleton_wi_DynamicData,
    'ashland': ashland_wi_DynamicData,
    'baraboo': baraboo_wi_DynamicData,
    'belmont': belmont_wi_DynamicData,
    'beloit': beloit_wi_DynamicData,
    'eau-claire': eau_claire_wi_DynamicData,
    'fonddulac': fonddulac_wi_DynamicData,
    'green-bay': green_bay_wi_DynamicData,
    'hayward': hayward_wi_DynamicData,
    'janesville': janesville_wi_DynamicData,
    'kenosha': kenosha_wi_DynamicData,
    'la-crosse': la_crosse_wi_DynamicData,
    'lake-geneva': lake_geneva_wi_DynamicData,
    'madison': madison_wi_DynamicData,
    'manitowoc': manitowoc_wi_DynamicData,
    'marinette': marinette_wi_DynamicData,
    'menasha': menasha_wi_DynamicData,
    'milwaukee': milwaukee_wi_DynamicData,
    'neenah': neenah_wi_DynamicData,
    'newglarus': newglarus_wi_DynamicData,
    'oconto': oconto_wi_DynamicData,
    'oshkosh': oshkosh_wi_DynamicData,
    'peshtigo': peshtigo_wi_DynamicData,
    'portage': portage_wi_DynamicData,
    'prairie-du-chien': prairie_du_chien_wi_DynamicData,
    'racine': racine_wi_DynamicData,
    'rhinelander': rhinelander_wi_DynamicData,
    'ripon': ripon_wi_DynamicData,
    'sheboygan': sheboygan_wi_DynamicData,
    'spring-green': spring_green_wi_DynamicData,
    'stevens-point': stevens_point_wi_DynamicData,
    'sturgeon-bay': sturgeon_bay_wi_DynamicData,
    'superior': superior_wi_DynamicData,
    'waukesha': waukesha_wi_DynamicData,
    'wausau': wausau_wi_DynamicData,
    'wauwatosa': wauwatosa_wi_DynamicData,
    'west-allis': west_allis_wi_DynamicData,
    'west-bend': west_bend_wi_DynamicData,
    'wisconsin-dells': wisconsin_dells_wi_DynamicData,
  },
  wyoming: {
    'buffalo': buffalo_wy_DynamicData,
    'casper': casper_wy_DynamicData,
    'cheyenne': cheyenne_wy_DynamicData,
    'cody': cody_wy_DynamicData,
    'douglas': douglas_wy_DynamicData,
    'evanston': evanston_wy_DynamicData,
    'gillette': gillette_wy_DynamicData,
    'green-river': green_river_wy_DynamicData,
    'jackson': jackson_wy_DynamicData,
    'lander': lander_wy_DynamicData,
    'laramie': laramie_wy_DynamicData,
    'newcastle': newcastle_wy_DynamicData,
    'powell': powell_wy_DynamicData,
    'rawlins': rawlins_wy_DynamicData,
    'riverton': riverton_wy_DynamicData,
    'rock-springs': rock_springs_wy_DynamicData,
    'sheridan': sheridan_wy_DynamicData,
    'ten-sleep': ten_sleep_wy_DynamicData,
    'thermopolis': thermopolis_wy_DynamicData,
    'torrington': torrington_wy_DynamicData,
    'worland': worland_wy_DynamicData,
  },
  // Add cities for other states here as you create them
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Helper function to replace {stateName} or {cityName} placeholders
export const replacePlaceholders: PlaceholderReplacer = (text: string, name: string): string => {
  return text.replace(/\{stateName\}/g, name).replace(/\{cityName\}/g, name);
};

// Helper function to recursively replace placeholders in objects
const replaceObjectPlaceholders = (obj: any, name: string): any => {
  if (typeof obj === 'string') {
    return replacePlaceholders(obj, name);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => replaceObjectPlaceholders(item, name));
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = replaceObjectPlaceholders(value, name);
    }
    return result;
  }
  
  return obj;
};

// Helper function to merge stats from template and static data
const mergeStateStats = (template: StateStaticConfig['staticData']['statsTemplate'], staticStats: StateStaticConfig['staticData']['stats'], stateName: string) => {
  if (!template || !Array.isArray(template)) {
    console.error('Invalid statsTemplate provided to mergeStateStats');
    return [];
  }
  
  return template.map(stat => ({
    number: staticStats[stat.key as keyof typeof staticStats] || 'N/A',
    label: stat.label || `${stateName} ${stat.labelSuffix || ''}`.trim(),
    iconName: stat.iconName,
    color: stat.color
  }));
};

// Helper function to merge trust indicators
const mergeStateTrustIndicators = (template: StateStaticConfig['staticData']['trustIndicatorsTemplate'], staticData: StateStaticConfig['staticData']['trustIndicators']) => {
  if (!template || !Array.isArray(template)) {
    console.error('Invalid trustIndicatorsTemplate provided to mergeStateTrustIndicators');
    return [];
  }
  
  return template.map(indicator => ({
    value: staticData[indicator.key as keyof typeof staticData] || 'N/A',
    label: indicator.label
  }));
};

// Helper function to merge city stats from template and static data
const mergeCityStats = (template: CityStaticConfig['staticData']['statsTemplate'], staticStats: CityStaticConfig['staticData']['stats'], cityName: string) => {
  if (!template || !Array.isArray(template)) {
    console.error('Invalid statsTemplate provided to mergeCityStats');
    return [];
  }
  
  return template.map(stat => ({
    number: staticStats[stat.key as keyof typeof staticStats] || 'N/A',
    label: stat.label || `${cityName} ${stat.labelSuffix || ''}`.trim(),
    iconName: stat.iconName,
    color: stat.color
  }));
};

// Helper function to merge city trust indicators
const mergeCityTrustIndicators = (template: CityStaticConfig['staticData']['trustIndicatorsTemplate'], staticData: CityStaticConfig['staticData']['trustIndicators']) => {
  if (!template || !Array.isArray(template)) {
    console.error('Invalid trustIndicatorsTemplate provided to mergeCityTrustIndicators');
    return [];
  }
  
  return template.map(indicator => ({
    value: staticData[indicator.key as keyof typeof staticData] || 'N/A',
    label: indicator.label
  }));
};

// =============================================================================
// STATE MANAGEMENT FUNCTIONS
// =============================================================================

// Main function to get complete state data
export const getStateData = (slug: string): StateData | null => {
  // Debug logging to help identify issues
  if (process.env.NODE_ENV === 'development') {
    console.log(`[getStateData] Fetching data for state: ${slug}`);
  }

  const dynamicData = STATES_DYNAMIC_REGISTRY[slug];
  if (!dynamicData) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[getStateData] No data found for state: ${slug}`);
    }
    return null;
  }

  try {
    // Replace placeholders in static config
    const staticConfigWithPlaceholders = replaceObjectPlaceholders(STATE_STATIC_CONFIG, dynamicData.name);

    // Merge stats and trust indicators
    const mergedStats = mergeStateStats(
      STATE_STATIC_CONFIG.staticData.statsTemplate, 
      STATE_STATIC_CONFIG.staticData.stats, 
      dynamicData.name
    );
    const mergedTrustIndicators = mergeStateTrustIndicators(
      STATE_STATIC_CONFIG.staticData.trustIndicatorsTemplate, 
      STATE_STATIC_CONFIG.staticData.trustIndicators
    );

    // Use static contact if dynamic doesn't exist
    const contact = dynamicData.contact || STATE_STATIC_CONFIG.contactTemplate;

    // Merge why choose us reasons with static icons (use static if dynamic not provided)
    const mergedWhyChooseUsReasons = dynamicData.whyChooseUs?.reasons?.map((reason, index) => ({
      ...reason,
      iconName: STATE_STATIC_CONFIG.whyChooseUsStatic.reasons[index]?.iconName || 'Settings',
      iconPath: STATE_STATIC_CONFIG.whyChooseUsStatic.reasons[index]?.iconPath || '/services-icon/default.svg'
    })) || STATE_STATIC_CONFIG.whyChooseUsStatic.reasons;

    // Merge process steps with static icons (use static if dynamic not provided)
    const mergedProcessSteps = dynamicData.process?.steps?.map((step, index) => ({
      ...step,
      step: STATE_STATIC_CONFIG.processStatic.steps[index]?.step || (index + 1).toString(),
      iconName: STATE_STATIC_CONFIG.processStatic.steps[index]?.iconName || 'Settings',
      iconPath: STATE_STATIC_CONFIG.processStatic.steps[index]?.iconPath || '/icon/default.svg'
    })) || STATE_STATIC_CONFIG.processStatic.steps;

    // Merge static and dynamic data with proper null checks
    const mergedData: StateData = {
      ...dynamicData,
      // Static elements
      ui: staticConfigWithPlaceholders.ui,
      typography: staticConfigWithPlaceholders.typography,
      trustPlatforms: staticConfigWithPlaceholders.trustPlatforms,
      
      // Merged hero with safety checks
      hero: {
        title: dynamicData.hero?.title || '',
        subtitle: dynamicData.hero?.subtitle || '',
        description: dynamicData.hero?.description || '',
        badge: dynamicData.hero?.badge || '',
        image: dynamicData.hero?.image || '',
        imageAlt: dynamicData.hero?.imageAlt || '',
        badgeIcon: STATE_STATIC_CONFIG.heroStatic.badgeIcon,
        trustIndicators: STATE_STATIC_CONFIG.heroStatic.trustIndicators
      },
      
      // Merged stats and trust indicators
      stats: mergedStats,
      trustIndicators: mergedTrustIndicators,
      
      // Contact
      contact,
      
      // Static services with placeholders replaced
      services: staticConfigWithPlaceholders.services,

      // Merged why choose us with static icons (fallback to static if not provided)
      whyChooseUs: {
        title: dynamicData.whyChooseUs?.title || staticConfigWithPlaceholders.whyChooseUsStatic.title,
        subtitle: dynamicData.whyChooseUs?.subtitle || staticConfigWithPlaceholders.whyChooseUsStatic.subtitle,
        description: dynamicData.whyChooseUs?.description || staticConfigWithPlaceholders.whyChooseUsStatic.description,
        reasons: mergedWhyChooseUsReasons
      },

      // Merged process with static icons (fallback to static if not provided)
      process: {
        title: dynamicData.process?.title || staticConfigWithPlaceholders.processStatic.title,
        subtitle: dynamicData.process?.subtitle || staticConfigWithPlaceholders.processStatic.subtitle,
        description: dynamicData.process?.description || staticConfigWithPlaceholders.processStatic.description,
        steps: mergedProcessSteps
      },

      // Other required properties with safety checks
      testimonials: dynamicData.testimonials || [],
      faqs: dynamicData.faqs || [],
      cities: dynamicData.cities || [],
      content: dynamicData.content || { introduction: '', sections: [] },
      mapEmbedUrl: dynamicData.mapEmbedUrl || '',
      localFactors: dynamicData.localFactors || {
        commonIssues: [],
        geography: '',
        climateFactors: [],
        buildingTypes: []
      },
      seo: dynamicData.seo || {
        metaTitle: '',
        metaDescription: '',
        keywords: [],
        openGraph: {
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          url: '',
          type: 'website',
          siteName: ''
        },
        twitter: {
          card: 'summary_large_image',
          title: '',
          description: '',
          image: '',
          imageAlt: ''
        }
      },
      customSchemas: dynamicData.customSchemas || [],
      neighboringStates: dynamicData.neighboringStates
    };

    return mergedData;
  } catch (error) {
    console.error(`[getStateData] Error processing dynamic data for state ${slug}:`, error);
    console.error('Dynamic data structure:', JSON.stringify(dynamicData, null, 2));
    return null;
  }
};

// Get dynamic state data only (without static config)
export const getStateDynamicData = (slug: string): StateDynamicData | null => {
  return STATES_DYNAMIC_REGISTRY[slug] || null;
};

// Get static config with placeholders replaced for a state
export const getStateStaticConfig = (stateName: string): StateStaticConfig => {
  return replaceObjectPlaceholders(STATE_STATIC_CONFIG, stateName);
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(STATES_DYNAMIC_REGISTRY);
};

export const getAllStates = (): StateData[] => {
  const stateList: StateData[] = [];
  
  Object.keys(STATES_DYNAMIC_REGISTRY).forEach(stateSlug => {
    const stateData = getStateData(stateSlug);
    if (stateData) {
      stateList.push(stateData);
    }
  });
  
  return stateList;
};

// =============================================================================
// CITY MANAGEMENT FUNCTIONS
// =============================================================================

// Main function to get complete city data
export const getCityData = (state: string, city: string): CityData | null => {
  // Debug logging to help identify issues
  if (process.env.NODE_ENV === 'development') {
    console.log(`[getCityData] Fetching data for city: ${city} in state: ${state}`);
  }

  const dynamicData = CITIES_DYNAMIC_REGISTRY[state]?.[city];
  if (!dynamicData) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[getCityData] No data found for city: ${city} in state: ${state}`);
    }
    return null;
  }

  try {
    // Replace placeholders in static config
    const staticConfigWithPlaceholders = replaceObjectPlaceholders(CITY_STATIC_CONFIG, dynamicData.name);

    // Merge stats and trust indicators using static data
    const mergedStats = mergeCityStats(
      CITY_STATIC_CONFIG.staticData.statsTemplate, 
      CITY_STATIC_CONFIG.staticData.stats, 
      dynamicData.name
    );
    const mergedTrustIndicators = mergeCityTrustIndicators(
      CITY_STATIC_CONFIG.staticData.trustIndicatorsTemplate, 
      CITY_STATIC_CONFIG.staticData.trustIndicators
    );

    // Use static contact if dynamic doesn't exist
    const contact = dynamicData.contact || CITY_STATIC_CONFIG.contactTemplate;

    // Merge static and dynamic data with proper null checks
    const mergedData: CityData = {
      ...dynamicData,
      // Static elements
      ui: staticConfigWithPlaceholders.ui,
      typography: staticConfigWithPlaceholders.typography,
      trustPlatforms: staticConfigWithPlaceholders.trustPlatforms,
      
      // Merged hero with safety checks
      hero: {
        title: dynamicData.hero?.title || '',
        subtitle: dynamicData.hero?.subtitle || '',
        description: dynamicData.hero?.description || '',
        badge: dynamicData.hero?.badge || '',
        image: dynamicData.hero?.image || '',
        imageAlt: dynamicData.hero?.imageAlt || '',
        badgeIcon: CITY_STATIC_CONFIG.heroStatic.badgeIcon,
        trustIndicators: CITY_STATIC_CONFIG.heroStatic.trustIndicators
      },
      
      // Merged stats and trust indicators
      stats: mergedStats,
      trustIndicators: mergedTrustIndicators,
      
      // Contact
      contact,
      
      // Static services with placeholders replaced
      services: staticConfigWithPlaceholders.services,

      // Complete static why choose us data
      whyChooseUs: staticConfigWithPlaceholders.whyChooseUsStatic,

      // Complete static process data
      process: staticConfigWithPlaceholders.processStatic,

      // Other required properties with safety checks
      testimonials: dynamicData.testimonials || [],
      faqs: dynamicData.faqs || [],
      nearbyCities: dynamicData.nearbyCities || [],
      content: dynamicData.content || { sections: [] },
      mapEmbedUrl: dynamicData.mapEmbedUrl || '',
      localFactors: dynamicData.localFactors || {
        commonIssues: [],
        soilType: '',
        climateFactors: [],
        buildingTypes: []
      },
      seo: dynamicData.seo || {
        metaTitle: '',
        metaDescription: '',
        keywords: [],
        openGraph: {
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          url: '',
          type: 'website',
          siteName: ''
        },
        twitter: {
          card: 'summary_large_image',
          title: '',
          description: '',
          image: '',
          imageAlt: ''
        }
      },
      customSchemas: dynamicData.customSchemas || []
    };

    return mergedData;
  } catch (error) {
    console.error(`[getCityData] Error processing dynamic data for city ${city} in state ${state}:`, error);
    console.error('Dynamic data structure:', JSON.stringify(dynamicData, null, 2));
    return null;
  }
};

// Get dynamic city data only (without static config)
export const getCityDynamicData = (state: string, city: string): CityDynamicData | null => {
  return CITIES_DYNAMIC_REGISTRY[state]?.[city] || null;
};

// Get static config with placeholders replaced for a city
export const getCityStaticConfig = (cityName: string): CityStaticConfig => {
  return replaceObjectPlaceholders(CITY_STATIC_CONFIG, cityName);
};

export const getAllCitySlugs = (state: string): string[] => {
  return Object.keys(CITIES_DYNAMIC_REGISTRY[state] || {});
};

export const getAllCitiesForState = (state: string): CityData[] => {
  const cityList: CityData[] = [];
  
  const dynamicCities = CITIES_DYNAMIC_REGISTRY[state];
  if (dynamicCities) {
    Object.keys(dynamicCities).forEach(citySlug => {
      const cityData = getCityData(state, citySlug);
      if (cityData) {
        cityList.push(cityData);
      }
    });
  }
  
  return cityList;
};

export const getAllStateAndCitySlugs = (): { state: string; city: string }[] => {
  const combinations: { state: string; city: string }[] = [];
  
  Object.keys(CITIES_DYNAMIC_REGISTRY).forEach(state => {
    Object.keys(CITIES_DYNAMIC_REGISTRY[state]).forEach(city => {
      combinations.push({ state, city });
    });
  });

  return combinations;
};

// Get all cities across all states
export const getAllCities = (): CityData[] => {
  const allCities: CityData[] = [];
  
  Object.keys(CITIES_DYNAMIC_REGISTRY).forEach(state => {
    Object.keys(CITIES_DYNAMIC_REGISTRY[state]).forEach(city => {
      const cityData = getCityData(state, city);
      if (cityData) {
        allCities.push(cityData);
      }
    });
  });

  return allCities;
};

// =============================================================================
// SEARCH FUNCTIONS
// =============================================================================

export const searchStates = (query: string): StateData[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllStates().filter(state => 
    state.name.toLowerCase().includes(lowercaseQuery) ||
    state.abbreviation.toLowerCase().includes(lowercaseQuery) ||
    state.region.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchCities = (query: string, stateFilter?: string): CityData[] => {
  const lowercaseQuery = query.toLowerCase();
  let citiesToSearch: CityData[] = [];

  if (stateFilter) {
    citiesToSearch = getAllCitiesForState(stateFilter);
  } else {
    citiesToSearch = getAllCities();
  }

  return citiesToSearch.filter(city =>
    city.name.toLowerCase().includes(lowercaseQuery) ||
    city.state.toLowerCase().includes(lowercaseQuery) ||
    city.county?.toLowerCase().includes(lowercaseQuery)
  );
};

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

export const isValidState = (slug: string): boolean => {
  return STATES_DYNAMIC_REGISTRY[slug] !== undefined;
};

export const isValidCity = (state: string, city: string): boolean => {
  return CITIES_DYNAMIC_REGISTRY[state]?.[city] !== undefined;
};

export const isValidStateAndCity = (state: string, city: string): boolean => {
  return isValidState(state) && isValidCity(state, city);
};

// =============================================================================
// STATISTICS FUNCTIONS
// =============================================================================

export const getLocationStats = () => {
  const totalStates = getAllStates().length;
  const totalCities = getAllCities().length;
  
  const citiesByState: { [state: string]: number } = {};
  
  Object.entries(CITIES_DYNAMIC_REGISTRY).forEach(([state, cities]) => {
    citiesByState[state] = Object.keys(cities).length;
  });

  const citiesByStateArray = Object.entries(citiesByState).map(([state, count]) => ({
    state,
    count
  }));

  // Calculate statistics by regions
  const statesByRegion: { [region: string]: number } = {};
  getAllStates().forEach(state => {
    statesByRegion[state.region] = (statesByRegion[state.region] || 0) + 1;
  });

  return {
    totalStates,
    totalCities,
    citiesByState: citiesByStateArray,
    statesByRegion,
    averageCitiesPerState: Math.round(totalCities / totalStates * 100) / 100,
    dynamicStates: Object.keys(STATES_DYNAMIC_REGISTRY).length,
    dynamicCities: Object.values(CITIES_DYNAMIC_REGISTRY).reduce((total, stateCities) => total + Object.keys(stateCities).length, 0)
  };
};

// =============================================================================
// SEO HELPER FUNCTIONS
// =============================================================================

export const generateSiteMap = () => {
  const urls: string[] = [];
  
  // Add state URLs
  getAllStateSlugs().forEach(stateSlug => {
    urls.push(`/locations/${stateSlug}`);
  });
  
  // Add city URLs
  Object.keys(CITIES_DYNAMIC_REGISTRY).forEach(state => {
    Object.keys(CITIES_DYNAMIC_REGISTRY[state]).forEach(city => {
      urls.push(`/locations/${state}/${city}`);
    });
  });
  
  return urls;
};

export const generateCitySiteMap = () => {
  const urls: string[] = [];
  
  Object.keys(CITIES_DYNAMIC_REGISTRY).forEach(state => {
    Object.keys(CITIES_DYNAMIC_REGISTRY[state]).forEach(city => {
      urls.push(`/locations/${state}/${city}`);
    });
  });
  
  return urls;
};

export const getStateMetadata = (stateSlug: string) => {
  const stateData = getStateData(stateSlug);
  if (!stateData) return null;
  
  return {
    title: stateData.seo.metaTitle,
    description: stateData.seo.metaDescription,
    keywords: stateData.seo.keywords,
    openGraph: stateData.seo.openGraph,
    twitter: stateData.seo.twitter,
    customSchemas: stateData.customSchemas,
  };
};

export const getCityMetadata = (stateSlug: string, citySlug: string) => {
  const cityData = getCityData(stateSlug, citySlug);
  if (!cityData) return null;
  
  return {
    title: cityData.seo.metaTitle,
    description: cityData.seo.metaDescription,
    keywords: cityData.seo.keywords,
    openGraph: cityData.seo.openGraph,
    twitter: cityData.seo.twitter,
    customSchemas: cityData.customSchemas,
  };
};

// =============================================================================
// CUSTOM SCHEMA HELPER FUNCTIONS
// =============================================================================

export const getCustomSchemas = (stateSlug: string) => {
  const stateData = getStateData(stateSlug);
  return stateData?.customSchemas || [];
};

export const getCityCustomSchemas = (stateSlug: string, citySlug: string) => {
  const cityData = getCityData(stateSlug, citySlug);
  return cityData?.customSchemas || [];
};

export const getSchemaById = (stateSlug: string, schemaId: string) => {
  const stateData = getStateData(stateSlug);
  return stateData?.customSchemas.find(schema => schema.id === schemaId) || null;
};

export const getCitySchemaById = (stateSlug: string, citySlug: string, schemaId: string) => {
  const cityData = getCityData(stateSlug, citySlug);
  return cityData?.customSchemas.find(schema => schema.id === schemaId) || null;
};

// =============================================================================
// ADDITIONAL UTILITY FUNCTIONS FOR STATES
// =============================================================================

export const getStatesByRegion = (region: string): StateData[] => {
  return getAllStates().filter(state => 
    state.region.toLowerCase() === region.toLowerCase()
  );
};

export const getStateByAbbreviation = (abbreviation: string): StateData | null => {
  return getAllStates().find(state => 
    state.abbreviation.toLowerCase() === abbreviation.toLowerCase()
  ) || null;
};

export const getRandomStates = (count: number): StateData[] => {
  const allStates = getAllStates();
  const shuffled = allStates.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, allStates.length));
};

export const getRandomCities = (count: number, stateFilter?: string): CityData[] => {
  const allCities = stateFilter ? getAllCitiesForState(stateFilter) : getAllCities();
  const shuffled = allCities.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, allCities.length));
};

export const getNeighboringStates = (stateSlug: string): StateData[] => {
  const stateData = getStateData(stateSlug);
  if (!stateData || !stateData.neighboringStates) return [];
  
  return stateData.neighboringStates
    .map(neighborSlug => getStateData(neighborSlug))
    .filter((state): state is StateData => state !== null);
};

export const getCitiesInState = (stateSlug: string): CityData[] => {
  return getAllCitiesForState(stateSlug);
};

export const getStateForCity = (citySlug: string): StateData | null => {
  // Search through all states to find the city
  for (const stateSlug of getAllStateSlugs()) {
    if (getAllCitySlugs(stateSlug).includes(citySlug)) {
      return getStateData(stateSlug);
    }
  }
  return null;
};

// =============================================================================
// UTILITY FUNCTIONS FOR ADDING NEW DATA (RUNTIME)
// =============================================================================

export const addStateDynamicData = (slug: string, data: StateDynamicData) => {
  STATES_DYNAMIC_REGISTRY[slug] = data;
};

export const addCityDynamicData = (state: string, city: string, data: CityDynamicData) => {
  if (!CITIES_DYNAMIC_REGISTRY[state]) {
    CITIES_DYNAMIC_REGISTRY[state] = {};
  }
  CITIES_DYNAMIC_REGISTRY[state][city] = data;
};

export const removeStateData = (slug: string) => {
  if (STATES_DYNAMIC_REGISTRY[slug]) {
    delete STATES_DYNAMIC_REGISTRY[slug];
  }
};

export const removeCityData = (state: string, city: string) => {
  if (CITIES_DYNAMIC_REGISTRY[state]) {
    delete CITIES_DYNAMIC_REGISTRY[state][city];
  }
};

// =============================================================================
// BULK OPERATIONS
// =============================================================================

export const bulkAddCities = (state: string, cities: { [slug: string]: CityDynamicData }) => {
  if (!CITIES_DYNAMIC_REGISTRY[state]) {
    CITIES_DYNAMIC_REGISTRY[state] = {};
  }
  Object.entries(cities).forEach(([slug, data]) => {
    CITIES_DYNAMIC_REGISTRY[state][slug] = data;
  });
};

export const bulkAddStates = (states: { [slug: string]: StateDynamicData }) => {
  Object.entries(states).forEach(([slug, data]) => {
    STATES_DYNAMIC_REGISTRY[slug] = data;
  });
};

// =============================================================================
// DEVELOPMENT & DEBUGGING UTILITIES
// =============================================================================

export const getRegistryStats = () => {
  return {
    dynamicStates: Object.keys(STATES_DYNAMIC_REGISTRY).length,
    dynamicCities: Object.values(CITIES_DYNAMIC_REGISTRY).reduce((total, stateCities) => total + Object.keys(stateCities).length, 0),
    dynamicStatesWithCities: Object.keys(CITIES_DYNAMIC_REGISTRY).length
  };
};

export const validateDataIntegrity = () => {
  const issues: string[] = [];
  
  // Check for states without any data
  const allStateSlugs = getAllStateSlugs();
  allStateSlugs.forEach(slug => {
    const stateData = getStateData(slug);
    if (!stateData) {
      issues.push(`State ${slug} has no data`);
    }
  });
  
  // Check for cities without parent states
  Object.keys(CITIES_DYNAMIC_REGISTRY).forEach(state => {
    if (!STATES_DYNAMIC_REGISTRY[state]) {
      issues.push(`Cities exist for state ${state} but state data is missing`);
    }
  });
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

// Export types for use in components
export type { StateData, CityData, CityDynamicData, CityStaticConfig, StateDynamicData, StateStaticConfig } from './types';
