"use client"

import { useState } from "react"

export default async function Gallery() { }


export function getElement({
  id,
  imageUrl,
  categoryId,
  category
}: {
  id: number,
  imageUrl: string,
  categoryId: number
  category: { id: number, name: "Objets" | "Appartements" | "Hotel & restaurants" }
}) {

}

export function postElement({
  image,
  title,
  category
}: {
  image: string,
  title: string,
  category: number
}) { 

}

