{
  description = "Clinica Torrealba Flake";

  inputs = {
    # nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs = { self, nixpkgs,... }: let
    system = "x86_64-linux";
  in {
    devShells.${system}.default = let
      pkgs = import nixpkgs { inherit system; };
    in pkgs.mkShell {
      packages = with pkgs; [
        nodejs_24
        nodePackages.pnpm
        (yarn.override { nodejs = nodejs_24; })
        zsh
      ];

      shellHook = ''
        echo "node `$pkgs.nodejs}/bin/node --version`"
        yarn install
        yarn dev &
        exec zsh
      '';
    };
  };
}
