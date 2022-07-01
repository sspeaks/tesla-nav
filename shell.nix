{pkgs ? import <nixpkgs> {}}:
with pkgs; (
  mkShell {
    name = "devEnv";
    buildInputs = [ yarn nodejs mongodb mongodb-tools ];
  }

)
