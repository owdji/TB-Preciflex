/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 hulecos.glb --transform 
Files: hulecos.glb [192.44KB] > /Users/gonin/Documents/HEIG/TB/website/frontend/public/hulecos-transformed.glb [12.72KB] (93%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hulecos-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.main.geometry} material={materials['Black Plastic.001']} rotation={[0, 0.718, 0]} />
      <mesh geometry={nodes.PIC.geometry} material={materials.Material} position={[0.001, 2.492, 0]} rotation={[0, 0.718, 0]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Screen low pitch procedural']} position={[0.205, 0.919, -0.171]} rotation={[0, 0.718, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/hulecos-transformed.glb')
