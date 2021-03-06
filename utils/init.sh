#!/bin/bash

echo "Creating directory tree..."
DEPENDENCYPATHS=$(npm ls -parseable)

declare -A dependencies

for DEP in $DEPENDENCYPATHS; do
  DEPNAME=$(basename $DEP)
  dependencies[$DEPNAME]=$DEP
done

if [ ! -d elation ]; then
  ln -sf ${dependencies["elation"]}

  cd elation/components
  #ln -sf ${dependencies["elation-engine"]} engine
  #ln -sf ${dependencies["elation-share"]} share
  #ln -sf ${dependencies["cyclone-physics"]} physics
  #ln -sf ${dependencies["janusweb"]} janusweb

  # FIXME - nodejs require() seems to have problems with symlinked directories, use cp -al to create recursive hard links instead
  cp -al ${dependencies["elation-engine"]} engine/
  cp -al ${dependencies["elation-share"]} share/
  cp -al ${dependencies["cyclone-physics"]} physics/

  # special handling for root dir
  DIR=${dependencies["janusweb"]}
  mkdir janusweb
  cp -al $DIR/css $DIR/scripts $DIR/media $DIR/utils janusweb/

  cd ..
  ./elation web init
  ./elation component enable engine physics share janusweb
fi
echo "done"
